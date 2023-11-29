import type { App } from 'vue';
import _IconCollageLine from './icon-collage-line.vue';

const IconCollageLine = Object.assign(_IconCollageLine, {
  install: (app: App) => {
    app.component(_IconCollageLine.name, _IconCollageLine);
  }
});

export default IconCollageLine;