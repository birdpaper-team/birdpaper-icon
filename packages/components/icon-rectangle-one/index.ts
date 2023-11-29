import type { App } from 'vue';
import _IconRectangleOne from './icon-rectangle-one.vue';

const IconRectangleOne = Object.assign(_IconRectangleOne, {
  install: (app: App) => {
    app.component(_IconRectangleOne.name, _IconRectangleOne);
  }
});

export default IconRectangleOne;