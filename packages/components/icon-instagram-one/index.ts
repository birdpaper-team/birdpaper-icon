import type { App } from 'vue';
import _IconInstagramOne from './icon-instagram-one.vue';

const IconInstagramOne = Object.assign(_IconInstagramOne, {
  install: (app: App) => {
    app.component(_IconInstagramOne.name, _IconInstagramOne);
  }
});

export default IconInstagramOne;