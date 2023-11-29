import type { App } from 'vue';
import _IconHailFill from './icon-hail-fill.vue';

const IconHailFill = Object.assign(_IconHailFill, {
  install: (app: App) => {
    app.component(_IconHailFill.name, _IconHailFill);
  }
});

export default IconHailFill;