import type { App } from 'vue';
import _IconImageCircleFill from './icon-image-circle-fill.vue';

const IconImageCircleFill = Object.assign(_IconImageCircleFill, {
  install: (app: App) => {
    app.component(_IconImageCircleFill.name, _IconImageCircleFill);
  }
});

export default IconImageCircleFill;