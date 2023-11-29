import type { App } from 'vue';
import _IconLinkedinFill from './icon-linkedin-fill.vue';

const IconLinkedinFill = Object.assign(_IconLinkedinFill, {
  install: (app: App) => {
    app.component(_IconLinkedinFill.name, _IconLinkedinFill);
  }
});

export default IconLinkedinFill;