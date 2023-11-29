import type { App } from 'vue';
import _IconRectangleX from './icon-rectangle-x.vue';

const IconRectangleX = Object.assign(_IconRectangleX, {
  install: (app: App) => {
    app.component(_IconRectangleX.name, _IconRectangleX);
  }
});

export default IconRectangleX;