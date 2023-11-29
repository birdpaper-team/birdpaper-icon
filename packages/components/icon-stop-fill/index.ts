import type { App } from 'vue';
import _IconStopFill from './icon-stop-fill.vue';

const IconStopFill = Object.assign(_IconStopFill, {
  install: (app: App) => {
    app.component(_IconStopFill.name, _IconStopFill);
  }
});

export default IconStopFill;