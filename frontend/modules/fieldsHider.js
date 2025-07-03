define([
  'underscore',
  'jquery'
], function (_, $) {
  const delay = (ms) => new Promise(res => setTimeout(res, ms));

  // скрываем номер телефона в основной сущности
  const hideCardPhones = (view) => {
    const $el = view.$el;
    $el.find('.linked-form__multiple-container').each((i, e) => {
      const name = $(e).find('input.control--suggest--input, .linked-form__cf.text-input, input.control--select--input').attr('name');
      const field_id = APP.constant('account').predefined_cf?.PHONE?.ID;
      
      if (!name || !field_id || name.match(field_id) == null) return;

      // скрываем плюсик для добавления нового номера
      $(e).find('.linked-form__field-add-multiple').addClass('hidden');

      // проходим по всем значениям поля типа multitext
      $(e).find('.linked-form__field__value').each((i, v) => {
        const text_wrapper = $(v);
        const text = text_wrapper.find('input[type="text"]');
        if (text.length) {
          text
            .css({ visibility: 'hidden', maxWidth: '0px', maxHeight: '0px' });

          const height = $(e).find('.linked-form__field__label').height();
          let styl = '';
          if (height != 0) {
            text.parent().css({ height: '0px' });
            styl += `display: flex; align-items: center; box-sizing: border-box; padding-top: 8px; height: ${height}px;`;
          }
          const fake_field = $(`<div style="${styl}"></div>`).text('***********');
          text_wrapper.append(fake_field);
          fake_field.on('click', e => {
            e.stopImmediatePropagation();
            text.trigger('click');
          });

          // проходим по dropdown меню с действиями
          const tips = text_wrapper.parent().find('.tips');
          // скрываем кнопку копирования
          tips.find('.tips-item[data-type="copy"]').addClass('hidden');
          // скрываем кнопку редактирования
          tips.find('.tips-item[data-type="edit"]').addClass('hidden');
        }
      });
    });
  };

  // скрываем номер клиента в заметке звонка
  const hideCardCallNote = (m) => {
    // note_type может отсутствовать
    const typ = m.attributes.note_type || m.attributes.type;
    const is_call_type = typ ? [APP.note_types.call_in, APP.note_types.call_out].includes(typ) : false;
    if (is_call_type) {
      const phone = m.attributes.data?.params?.phone;
      if (!phone) return;

      let $el = $(`.feed-note-wrapper[data-id="${m.id}"]`).find('.feed-note');
      let header = $el.find('.feed-note__header').find('.feed-note__header-inner-nowrap');
      if (header.length == 0) {
        // у сгруппированных в задаче заметок нет data-id
        $el = m._events?.render[0]?.context?.$el;
        if (!$el || !$el.hasClass('feed-note-wrapper-task')) return;
        header = $el.find('.feed-note__tasks-joined').find('.feed-note__header-inner-nowrap');
      }

      if (typ == APP.note_types.call_out) {
        const v = $(header);
        const text = v.html();
        const num = text.substr(text.lastIndexOf('&nbsp;')+1).replace('nbsp;', '');
        v.html(text.replace(num, '***********'));
      }
      if (typ == APP.note_types.call_in) {
        const v = $(header).children().eq(1);
        const num = v.text().replace(/[^+*\d]/g, '');
        v.html(v.html().replace(num, '***********'));
      }
    }

    // это заметка об изменении значения поля телефона
    if (m.attributes.data?.params?.field_id == APP.constant('account').predefined_cf?.PHONE?.ID) {
      const new_value = m.attributes.data.params.new_value;
      const old_value = m.attributes.data.params.old_value;

      $(`.feed-note-wrapper[data-id="${m.id}"]`).each((i, v) => {
        const $el = $(v);
        if ($el.hasClass('tlp-hidden')) return;
        $el.addClass('tlp-hidden');

        const nums = $el.html().match(/(?<=\«).*?(?=\»)/g);
        if (!nums || !nums.length) return;

        let h = $el.html();
        nums.forEach(num => {
          if (num == new_value) h = h.replace(num, '***********');
          if (num == old_value) h = h.replace(num, '***********');
        });
        $el.html(h);
      });
    }
  };

  // скрытие номера в карточках
  const initCard = async () => {
    const area = APP.getWidgetsArea();

    // паузы нужны, потому что привязанные сущности не успевают подгрузиться
    while (!APP.data?.current_card?.linked_forms?.form_views.length) {
      if (!area.match('_card')) {
        break;
      }
      await delay(30);
    }

    // скрываем номер телефона в привязанных сущностях
    // el.card_id присутствует только в созданных сущностях
    APP.data.current_card.linked_forms.form_views.forEach(el => el.card_id && hideCardPhones(el));

    // не скрываем в карточках создания сущности
    !APP.data.current_card.new_card && hideCardPhones(APP.data.current_card.form);

    // скрытие заметок типа звонок
    APP.data.current_card?.notes?.notes?.models.forEach((m) => hideCardCallNote(m));

    if (area == 'leads_card') {
      let phone = '';
      let model = null;
      const phone_field_id = APP.constant('account').predefined_cf?.PHONE?.ID;
      APP.data.current_card.linked_forms.form_models.models.some(m => {
        if (m.attributes.ID) {
          const cfkeys = m.getCFKeysById(phone_field_id).filter(cf => cf.indexOf('[VALUE]') > -1);
          cfkeys.some(key => {
            const v = m.attributes[key];
            if (v) {
              model = m;
              phone = v;
              return true;
            }
            return false;
          });
          if (phone && model != null) return true;
        }
        return false;
      });

      if (model != null && phone != '') {
        const imgSrc = window.TelphinWidget.params.images_path;
        const buttonField = `<div class="linked-form__field">
          <div class="linked-form__field__label"></div>
          <div class="linked-form__field__value">
            <div id="tlpn__lead-call" style="display: flex; align-items:center; cursor: pointer;">
              <img src="${imgSrc}/logo_min.png" style="width:1rem;height:1rem; margin-right: 0.375rem;">
              ${window.TelphinWidget.langs.buttons.to_call}
            </div>
          </div>
        </div>`;
        $('.card-entity-form .card-entity-form__fields .card-entity-form__main-fields').prepend(buttonField);
        $("#tlpn__lead-call").on("click", _.throttle((e) => {
          e.preventDefault();
          e.stopPropagation();
          params = { entity: { id: model.defaults.ID, element_type: model.element_type } };
          window.TelphinWidget.phoneApp.phone.call(phone, params);
          return false;
        }, 1000));
      }
    }
  };

  // скрытие номера в списках, везде, где есть колонка "Телефон"
  const initList = () => {
    // ищем поле телефона
    const field = APP.data?.current_list?.data?.fields.find(f => f.default_code == 'phone');
    if (!field) return;

    // ищем колонку телефона в таблице
    const fields = $(`.list-row-head .list-row__cell-${field.code}`);
    if (fields.length == 0) return;

    // получаем все элементы колонки
    const $el = $(`.list-row:not(.list-row-head) .list-row__cell-${field.code} .content-table__item__inner`);
    if ($el.length == 0) return;

    $el.each((i, s) => {
      // удаление класса не дает показывать иконку редактирования
      // ивент клика для предотвращения появления окна редактирования
      $(s)
        .html('**********')
        .closest('.list-row__cell')
        .removeClass('js-list-row__cell')
        .on('click', (e) => e.stopImmediatePropagation());
    });
  };

  class Hider {
    constructor(widget) {
      this.widget = widget;

      // срабатывает быстрее чем callbacks.render
      $(document).on('page:changed', this.handle.bind(this));

      // срабатывает на сменах вкладок (tabs), нажатиях на кнопку "развернуть" и тд
      // нужен для скрытия заметок при развертывании
      $(document).on('controls:hide:private', this._handleCardNotes.bind(this));

      // подписка на добавление элементов в центр нотификации
      APP.inbox.notifications?.listenTo(APP.inbox.notifications, "add", this._handleInboxNote.bind(this), APP.inbox.notifications);

      // выключает всплытие новых уведомлений справа от кнопки центра нотификации
      APP.inbox.addNotifyFilter(((e) => {
        if (!this.widget.hiderSettings.value?.hide || !e) return true;

        const body = e.body;
        const entity = e.entity;
        if (entity && !['lead', 'contact', 'company', 'customer'].includes(entity.type)) return;

        // silent - параметр уведомления, тихая отправка (new Notification)
        e.silent = true;

        if (e.body.icon && e.body.icon.call) {
          e.body.rows[0].text = body.rows[0].text.replace(/[\d+:]+/g, '').trim();
          return true;
        }

        e.body.rows[0].text = body.rows[0].text.replace(/[\d+:]+/g, '').trim();
        if (e.body.rows[0].text == APP.lang['call_from']) e.body.rows[0].text = APP.lang['unsorted sip'];

        return true;
      }));
    }

    handle() {
      this.observer?.disconnect();
      this.observer = null;
      if (!this.widget.enabled_ext.value || !this.widget.hiderSettings.value?.hide) return;

      const area = APP.getWidgetsArea();

      if (['contacts', 'companies', 'catalogs'].includes(area)) {
        initList();
      }

      if (area.match('_card')) {
        this.observer = new MutationObserver((mutationList, observer) => {
          mutationList.forEach(m => {
            if (!m.addedNodes.length) return;
            m.addedNodes.forEach(n => {
              const t = $(n);
              if (t.hasClass('feed-note-wrapper-call_in_out')) {
                const m = APP.data.current_card?.notes?.notes.get(t.attr('data-id'));
                if (!m) return;

                hideCardCallNote(m);
              }
            })
          });
        });
        const targetNode = $('.notes-wrapper__notes.js-notes')[0];
        this.observer.observe(targetNode, { childList: true, subtree: true });
        initCard();
      }

      if (area === 'leads.pipeline' || area === 'leads-pipeline') {
        const e = APP.data.current_view;
        if (!e.unsorted_settings.enabled) return;

        const unsorted = e.statuses.models.find(m => m.get('type') == 1);
        if (!unsorted) return;

        const hide = (m) => {
          if (m.get('category') != 'sip' && m.get('status') != unsorted.id) return;
          const el = $(`#pipeline_item_${m.id}`).find('.pipeline-unsorted__item-title.pipeline-unsorted-sip__title');
          if (!el.length) return;

          const $el = $(el);
          $el.html($el.html().replace(m.attributes.source_data.from, '***********'));
        };

        this.observer = new MutationObserver(async (mutationList, observer) => {
          // await delay(300);
          mutationList.forEach(m => {
            if (!m.addedNodes.length) return;
            m.addedNodes.forEach(n => {
              const t = $(n);
              if (t.hasClass('pipeline-unsorted__item')) {
                const m = APP.data.current_view?._items?.get(t.attr('id').replace('pipeline_item_', ''));
                if (!m) return;
                hide(m);
              }
            })
          });
        });
        const targetNode = $(`#pipeline_items__list_${unsorted.id}`)[0];
        this.observer.observe(targetNode, { childList: true, subtree: true });

        APP.data.current_view._items.models.forEach(m => hide(m));
      }
    }

    async _handleInboxNote(e) {
      if (!this.widget.hiderSettings.value?.hide || !e) return;

      const body = e.get('body');
      const entity = e.get('entity');
      if (entity && !['lead', 'contact', 'company', 'customer'].includes(entity.type)) return;

      e.attributes.body.rows[0].text = body.rows[0].text.replace(/[\d+:]+/g, '').trim();
      if (e.attributes.body.rows[0].text == APP.lang['call_from']) e.attributes.body.rows[0].text = APP.lang['unsorted sip'];

      // после изменения обновляем отображение списка
      // через изменение html не работает, при ивентах скролла вызывается обновление
      APP.inbox.updateListView();
  }

    _handleCardNotes(e) {
      if (!this.widget.hiderSettings.value?.hide || !e) return;

      const t = $(e.target);
      if (!(t.hasClass('feed-note__blue-link') && t.hasClass('js-grouped-expand'))) {
        return;
      }

      APP.data.current_card?.notes?.notes?.models.forEach((m) => hideCardCallNote(m));
    }
  }

  return Hider;
});
