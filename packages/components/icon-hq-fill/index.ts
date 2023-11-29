import type { App } from 'vue';
import _IconHqFill from './icon-hq-fill.vue';

const IconHqFill = Object.assign(_IconHqFill, {
  install: (app: App) => {
    app.component(_IconHqFill.name, _IconHqFill);
  }
});

export default IconHqFill;