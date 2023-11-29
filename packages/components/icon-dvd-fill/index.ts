import type { App } from 'vue';
import _IconDvdFill from './icon-dvd-fill.vue';

const IconDvdFill = Object.assign(_IconDvdFill, {
  install: (app: App) => {
    app.component(_IconDvdFill.name, _IconDvdFill);
  }
});

export default IconDvdFill;