import type { App } from 'vue';
import _IconBlazeFill from './icon-blaze-fill.vue';

const IconBlazeFill = Object.assign(_IconBlazeFill, {
  install: (app: App) => {
    app.component(_IconBlazeFill.name, _IconBlazeFill);
  }
});

export default IconBlazeFill;