import type { App } from 'vue';
import _IconLinkedinBoxFill from './icon-linkedin-box-fill.vue';

const IconLinkedinBoxFill = Object.assign(_IconLinkedinBoxFill, {
  install: (app: App) => {
    app.component(_IconLinkedinBoxFill.name, _IconLinkedinBoxFill);
  }
});

export default IconLinkedinBoxFill;