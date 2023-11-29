import type { App } from 'vue';
import _IconLiveFill from './icon-live-fill.vue';

const IconLiveFill = Object.assign(_IconLiveFill, {
  install: (app: App) => {
    app.component(_IconLiveFill.name, _IconLiveFill);
  }
});

export default IconLiveFill;