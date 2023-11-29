import type { App } from 'vue';
import _IconRectangle from './icon-rectangle.vue';

const IconRectangle = Object.assign(_IconRectangle, {
  install: (app: App) => {
    app.component(_IconRectangle.name, _IconRectangle);
  }
});

export default IconRectangle;