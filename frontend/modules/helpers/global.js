define(["jquery"], function ($) {
  return {
    injectStyles: (widget) => {
      const $styles = $("head > [telphin-styles]");
      //список css-файлов без расширения
      const cssList = ["style"];
      const settings = widget.get_settings(),
        data = {
          path: settings.path,
          v: AMOCRM.widgets.list[settings.widget_code].params.version
        };
      if ($styles.length === 0) {
        const head = $("head");

        cssList.forEach((el) => {
          head.append(
            $("<link>", {
              "type": "text/css",
              "rel": "stylesheet",
              "href": data.path + "/css/" + el + ".css?v=" + data.v,
              "telphin-styles": true
            })
          );
        });
      }
    },

  //спиннер загрузки (лоадер)
  loader: (parentSelector) => {
      return {
        element_name: "tlph-loader",
        create: function(){
            let loader = document.createElement('div');
            loader.className = this.element_name;

            return $(loader);
        },
        show: function(){
            let loader = this.create();
            parentSelector.before(loader);
        },
        hide: function(){
            $("." + this.element_name).remove();
        }
      }
    }
  }
});
