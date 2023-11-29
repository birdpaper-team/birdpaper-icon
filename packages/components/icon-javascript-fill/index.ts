import type { App } from 'vue';
import _IconJavascriptFill from './icon-javascript-fill.vue';

const IconJavascriptFill = Object.assign(_IconJavascriptFill, {
  install: (app: App) => {
    app.component(_IconJavascriptFill.name, _IconJavascriptFill);
  }
});

export default IconJavascriptFill;