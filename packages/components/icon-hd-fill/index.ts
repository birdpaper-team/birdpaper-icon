import type { App } from 'vue';
import _IconHdFill from './icon-hd-fill.vue';

const IconHdFill = Object.assign(_IconHdFill, {
  install: (app: App) => {
    app.component(_IconHdFill.name, _IconHdFill);
  }
});

export default IconHdFill;