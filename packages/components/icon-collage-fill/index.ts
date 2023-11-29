import type { App } from 'vue';
import _IconCollageFill from './icon-collage-fill.vue';

const IconCollageFill = Object.assign(_IconCollageFill, {
  install: (app: App) => {
    app.component(_IconCollageFill.name, _IconCollageFill);
  }
});

export default IconCollageFill;