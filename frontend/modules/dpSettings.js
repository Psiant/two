define([
  'jquery',
  './helpers/global.js',
], function ($, global) {
  // показ уведомлений
  const NOTIFICATION = {
    element_name: 'tlph-dp-alert',
    create: function(header, text){
      const notification = document.createElement('div');
      notification.className = `${this.element_name} ${this.notification_type}`;
      notification.innerHTML = `<p class="tlph-dp-alert__text">${text}</p>`;

      if (header) {
        const HEADER = `<div class="tlph-dp-alert__heading">${header}</div>`;
        notification.innerHTML = HEADER + notification.innerHTML;  
      }

      return $(notification);
    },

    show: function(header, text){
      $('.' + this.element_name).remove();
      const notification = this.create(header, text);

      $('.digital-pipeline__warning-container').append(notification);
      return notification;
    }
  };

  class InitFactory {
    constructor(widget) {
      this.widget = widget;
      this.settings = {};
    }

    async getSettings() {
      await this.loadDpSettings();
      return this.settings;
    }

    async loadDpSettings() {
      try {
        const userId = AMOCRM.constant('user').id;
        const accountId = AMOCRM.constant('account').id;
        const url = `${this.widget.CONSTANTS.WEB_URI}/api/crm/dp/settings?user_id=${userId}&account_id=${accountId}`;
        const r = await this.widget.axios.get(url);
        const result = r.data;

        if (!this.settings) {
          this.settings = {};
        }

        this.settings.accountId = accountId;
        this.settings.userId = userId;
        if (result.status) {
          $('.tlph-task-edit__body__form').show();
          // пункты селекта "Логика звонка"
          this.settings.whoAllocatedValues = [
            { key: 'user', value: this.widget.langs.dp.fields['callback_user_selector_text'] },
            { key: 'responsible', value: this.widget.langs.dp.fields['callback_responsible_select_text'] },
            { key: 'line', value: this.widget.langs.dp.fields['callback_line_selector_text'] }
          ];
          this.settings.whoAllocatedSelectorId = 'tlph_dp_who_allocated_selector';
          this.settings.whoAllocatedSelectorValue = this.settings.whoAllocatedValues[0].key;
          this.settings.whoAllocatedSelectorOptions = this.settings.whoAllocatedValues;
          this.settings.whoAllocatedSelectorText = this.widget.langs.dp.fields['who_allocated_selector_text'];

          // для "Логика звонка" = сотруднк
          this.settings.callbackUserValues = result['callback_users'] || [];
          this.settings.callbackUserSelectorId = 'tlph_dp_callback_user_selector';
          this.settings.callbackUserSelectorValue = this.settings.callbackUserValues[0].id;
          this.settings.callbackUserSelectorOptions = this.settings.callbackUserValues;
          this.settings.callbackUserSelectorText = this.widget.langs.dp.fields['callback_user_selector_text'];

          // для "Логика звонка" = виртуальный номер
          this.settings.callbackLineValues = result['callback_lines'] || [];
          this.settings.callbackLineSelectorId = 'tlph_dp_callback_line_selector';
          this.settings.callbackLineSelectorValue = this.settings.callbackLineValues[0];
          this.settings.callbackLineSelectorOptions = this.settings.callbackLineValues;
          this.settings.callbackLineSelectorText = this.widget.langs.dp.fields['callback_line_selector_text'];
        } else {
          if (!result.status) {
            NOTIFICATION.show(this.widget.langs.dp.errors.not_activated);
          } else {
            NOTIFICATION.show(this.widget.langs.dp.errors.system_error);
          }
        }

        return result;
      } catch (err) {
        console.trace('loadDpSettings', err);
        throw err;
      }
    }
  };

  class Impl {
    constructor(widget) {
      this.widget = widget;
      this.state = {};
      this.settings = {};
    }

    setSettings(settings) {
      this.settings = settings;
      this.initState();
      }

    initState() {
      if (!this.state) {
        this.state = {};
      }
      // идентификатор пользователя
      this.state.userId = this.settings.userId;
      // идентификатор амо клиента (срм)
      this.state.accountId = this.settings.accountId;
      // значение селекта "логика звонка"
      this.state.whoAllocatedSelectorValue = this.settings.whoAllocatedSelectorValue;
      // значение доп селекта при "логика звонка" = сотрудник
      this.state.callbackUserSelectorValue = this.settings.callbackUserSelectorValue;
      // значение доп селекта при "логика звонка" = виртуальный номер
      this.state.callbackLineSelectorValue = this.settings.callbackLineSelectorValue;

      const w_code = this.widget.get_settings().widget_code;
      const dp_modal = $(".digital-pipeline__short-task_widget-style_" + w_code).parent().parent().find('[data-action=send_widget_hook]');
      const holdingInput = dp_modal.find('input[name=dpData]');
      // если данных в поле нет - сохранить в него начальное состояние state
      if (this.isEmptySavedState(holdingInput)) {
        this.saveState(holdingInput);
      }
    }

    enabledDPW() {
      const w_code = this.widget.get_settings().widget_code;
      const dp_modal = $(".digital-pipeline__short-task_widget-style_" + w_code).parent().parent().find('[data-action=send_widget_hook]');
      const holdingInput = dp_modal.find('input[name=dpData]');
      this.loadState(holdingInput);

      // select поле для выбора логики звонка
      const whoAllocatedSelector = this.createSelector(this.settings.whoAllocatedSelectorId, this.settings.whoAllocatedSelectorText, this.settings.whoAllocatedSelectorOptions, this.state.whoAllocatedSelectorValue, function (e) { return e.key; }, function (e) { return e.value; });
      // select доп поле для логики звонка при выбранном значении "сотрудник"
      const callbackUserSelector = this.createSelector(this.settings.callbackUserSelectorId, this.settings.callbackUserSelectorText, this.settings.callbackUserSelectorOptions, this.state.callbackUserSelectorValue, function (e) { return e.id; }, function (e) { return `${e.name} (доб. ${e.extNumber})`; });
      // select доп поле для логики звонка при выбранном значении "виртуальный номер"
      const callbackLineSelector = this.createSelector(this.settings.callbackLineSelectorId, this.settings.callbackLineSelectorText, this.settings.callbackLineSelectorOptions, this.state.callbackLineSelectorValue, function (e) { return e; }, function (e) { return e; });

      var self = this
      // отслеживаем изменение выбранного параметра "Логика звонка"
      whoAllocatedSelector.on('change', function () {
        self.state.whoAllocatedSelectorValue = $(this).children("select").val();
        self.visibleWhoAllocatedBlock($(this).children("select").val());
        self.saveState(holdingInput);
      });
      // отслеживаем изменение выбранного сотрудника
      callbackUserSelector.on('change', function () {
        self.state.callbackUserSelectorValue = $(this).children("select").val();
        self.saveState(holdingInput);
      });
      // отслеживаем изменение выбранного виртуального номера
      callbackLineSelector.on('change', function () {
        self.state.callbackLineSelectorValue = $(this).children("select").val();
        self.saveState(holdingInput);
      });

      dp_modal.find('input[name="dpData"]').hide();
      const root = dp_modal.find('[title^="' + this.widget.langs.dp.data_field_name + '"]').hide();
      root.before(whoAllocatedSelector).before(callbackUserSelector).before(callbackLineSelector);

      // управляем отобржаением блоками настроек
      this.visibleCallbackBlock(true);
      };

      // показываем/скрываем селект "Логика звонка"
    visibleCallbackBlock(visible) {
      if (visible === true) {
        $(`#${this.settings.whoAllocatedSelectorId}`).show();
        this.visibleWhoAllocatedBlock(this.state.whoAllocatedSelectorValue);
      } else {
        $(`#${this.settings.whoAllocatedSelectorId}`).hide();
        $(`#${this.settings.callbackUserSelectorId}`).hide();
        $(`#${this.settings.callbackLineSelectorId}`).hide();
      }
      }

      // показываем/скрываем доп селекты "Логики звонка" в зависимости от выбранного значения
    visibleWhoAllocatedBlock(state) {
      if (!state || state === "user") {
        $(`#${this.settings.callbackUserSelectorId}`).show();
        $(`#${this.settings.callbackLineSelectorId}`).hide();
      }
      if (state === "line") {
        $(`#${this.settings.callbackLineSelectorId}`).show();
        $(`#${this.settings.callbackUserSelectorId}`).hide();
      }
      if (state === "responsible") {
        $(`#${this.settings.callbackUserSelectorId}`).hide();
        $(`#${this.settings.callbackLineSelectorId}`).hide();
      }
      }

    isEmptySavedState(holdingInput) {
      let result = true;
      if (!!holdingInput && holdingInput.val() !== "") {
        result = false;
      }

      return result;
      }

    saveState(holdingInput) {
      holdingInput.val(JSON.stringify(this.state));
      // без тригера не активируется кнопка "Готово" и не будут сохраняться данные при изменении
      $(holdingInput).trigger('change');
      };

    loadState(holdingInput) {
      this.state = JSON.parse(decodeURIComponent(holdingInput.val()));
      }

    createSelector(selectorId, selectorText, selectorOptions, selectedValue, optionValFunc, optionTextFunc) {
      const selector = $("<div id='" + selectorId + "'>");
      const selectorLabel = $("<div>" + selectorText + "</div>");
      const selectorSelect = $("<select id='" + selectorId + "_select' class='tlph-dp-text-field'>");

      $.each(selectorOptions, function (_, entry) {
        const option = $('<option>').attr('value', optionValFunc(entry)).text(optionTextFunc(entry));
        if (optionValFunc(entry) == selectedValue) {
          option.attr('selected', 'selected');
        }
        selectorSelect.append(option);
      });
      selector.append(selectorLabel);
      selector.append(selectorSelect);
      return selector;
      }
  };

  return async (widget) => {
    $('.task-edit__body__form').addClass('tlph-task-edit__body__form');
    $('.tlph-task-edit__body__form').hide();
    const loader = global.loader($('.digital-pipeline__edit-forms'));
    loader.show();

    try {
      const impl = new Impl(widget);
      let initFactory = new InitFactory(widget);
      let settings = await initFactory.getSettings();
      impl.setSettings(settings);
      impl.enabledDPW();
    } catch (e) {
      const err = widget.langs.dp.errors.system_error;
      NOTIFICATION.show(err.header, err.text)
    } finally {
      loader.hide();
    }
  };
});
