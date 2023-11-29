import type { App } from 'vue';
import _IconWindyFill from './icon-windy-fill.vue';

const IconWindyFill = Object.assign(_IconWindyFill, {
  install: (app: App) => {
    app.component(_IconWindyFill.name, _IconWindyFill);
  }
});

export default IconWindyFill;