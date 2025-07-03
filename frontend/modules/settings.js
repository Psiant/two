define([
  'jquery',
  'lib/components/base/modal'
], function ($, Modal) {
  class WidgetView {
    constructor(widget) {
      this.widget = widget;
      this.system = widget.system();
      this.settings = widget.get_settings();
    }

    show(cb) {
      // загружаем шаблон
      this.widget.tools.template.get(this.widget, 'settings', {}, (t) => {
        // отображение контента после установки виджета
        const cabinetUrl = this.widget.CONSTANTS.WEB_URI + `/site/login`;
        $('.widget_settings_block__descr').html(
          t.render({
            currentUser: AMOCRM.constant('user'),
            cabinetUrl: `${cabinetUrl}?source=amocrm&amouser=${this.system.amouser}&domain=${this.system.domain}`
          })
        );

        this.on();
        cb();
      });
    }

    on() {
      // переключение вкладок по клику
      $('ul.tlph-tabs__caption > li').off('click').on('click', function () {
        const tabActiveClass = "tlph-tab--active";
        if (!$(this).hasClass(tabActiveClass)) {
          $(this)
            .addClass(tabActiveClass)
            .siblings()
            .removeClass(tabActiveClass)
            .closest('div.tlph-tabs')
            .find('div.tlph-tabs__content')
            .removeClass('tlph-tabs__content--active')
            .eq($(this).index())
            .addClass('tlph-tabs__content--active');
        }
      });

      $('[name="widget_active"]').on('click', function () {
        $('.js-widget-save').trigger('button:save:enable').trigger('click');
      });
    }
  }

  class Form {
    constructor(widget) {
      this.widget = widget;
      this.system = widget.system();
      this.formId = '#tlph-form-register';
      this.fieldName = $('[name="telphinRegisterName"]');
      this.fieldPhone = $('[name="telphinRegisterPhone"]');
      this.fieldEmail = $('[name="telphinRegisterEmail"]');
      this.fieldPrivacy = $('#telphin_privacy');
      this.submitButton = $(this.formId).find('.tlph-form__btn');

      const user = AMOCRM.constant('user');
      this.fieldName.val(user.name);
      this.fieldPhone.val(user.personal_mobile);
      this.fieldEmail.val(user.login);
    }

    validate() {
      if (!this.fieldPrivacy.is(':checked')) {
        this.fieldPrivacy.addClass('error');
        return false;
      }

      let validated = true;
      [this.fieldEmail, this.fieldName, this.fieldPhone].forEach(function ($field) {
        if (!$field.val()) {
          validated = false;
          $field.addClass('error');
          return false;
        }
      });

      if (validated) {
        $(this.formId).find('.error').each(() => {
          $(this).removeClass('error');
        });
      }
      return validated;
    }

    disableButtons() {
      this.submitButton
        .addClass('button-input-loading')
        .addClass('button-input-disabled');

      this.submitButton.prop('disabled', true);
      this.fieldPrivacy.prop('disabled', true);
    }

    enableButtons() {
      this.submitButton
        .removeClass('button-input-loading')
        .removeClass('button-input-disabled');

      this.submitButton.prop('disabled', false);
      this.fieldPrivacy.prop('disabled', false);
    }

    async send() {
      const url = `${this.widget.CONSTANTS.WEB_URI}/api/crm/register`;
      return await this.widget.axios.post(url, {
        subdomain: this.system.domain,
        user: this.system.amouser,
        email: this.fieldEmail.val(),
        name: this.fieldName.val(),
        phone: this.fieldPhone.val()
      });
    }

    on() {
      this.fieldPrivacy.on('change', () => {
        const disabled = !this.fieldPrivacy.is(':checked');
        this.submitButton.prop('disabled', disabled);
      });

      // нажатие на кнопку "Отправить"
      $(this.formId).on('submit', async (e) => {
        e.preventDefault();

        try {
          this.disableButtons();
          $('.tlph-form__error').hide();
          if (!this.validate()) return false;

          await this.send();

          $('[name="widget_active"]').prop('checked', true);
          $('.js-widget-save').trigger('button:save:enable').trigger('click');

          const data = {
            title: this.widget.langs.modals.register.title,
            body: this.widget.langs.modals.register.body,
          };
          // показываем модальное окно после отправки формы
          this.widget.tools.template.get(this.widget, 'modal', data, (template) => {
            new Modal({
              class_name: 'tlph-modal--register',
              init: ($modal_body) => {
                $modal_body
                  .html(template.render(data))
                  .append(
                    '<span class="modal-body__close"><span class="icon icon-modal-close"></span></span>'
                  )
                  .trigger('modal:centrify');
              },
              destroy: function () {},
            });
          });
        } catch (err) {
          console.trace("register request", err);
          $('.tlph-form__error').html(err.message).show();
        } finally {
          this.enableButtons();
        }
      });
    };
  }

  return async (widget) => {
    $('.widget_settings_block').addClass('telphin--settings');
    const settings = widget.get_settings();
    const code = settings.widget_code;

    if (settings.widget_active === 'N') {
      const user = AMOCRM.constant('user');
      $('input[name=registerName]').val(user.name);
      $('input[name=registerPhone]').val(user.personal_mobile);
      $('input[name=registerEmail]').val(user.login);
      $('input[name=registerPrivacy]').val(true);
      // нужен таймаут, иначе статус не успевает смениться
      $(`#save_${code}`).click();
      $('[name="widget_active"]').click();
      setTimeout(() => {
        $(`#save_${code}`).click();
        $('[name="widget_active"]').click();
      }, 1000);

      const data = {
        title: widget.langs.modals.install.title,
        body: widget.langs.modals.install.body,
      };
      widget.tools.template.get(widget, 'modal', data, (template) => {
        new Modal({
          class_name: 'tlph-modal--register',
          init: ($modal_body) => {
            $modal_body
              .html(template.render(data))
              .append(
                '<span class="modal-body__close"><span class="icon icon-modal-close"></span></span>'
              )
              .trigger('modal:centrify');
          },
          destroy: function () {},
        });
      });
    }

    const view = new WidgetView(widget);
    view.show(function () {
      const form = new Form(widget);
      form.on();
    });
  };
});
