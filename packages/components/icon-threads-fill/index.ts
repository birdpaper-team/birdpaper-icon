import type { App } from 'vue';
import _IconThreadsFill from './icon-threads-fill.vue';

const IconThreadsFill = Object.assign(_IconThreadsFill, {
  install: (app: App) => {
    app.component(_IconThreadsFill.name, _IconThreadsFill);
  }
});

export default IconThreadsFill;