import type { App } from 'vue';
import _IconRotationOne from './icon-rotation-one.vue';

const IconRotationOne = Object.assign(_IconRotationOne, {
  install: (app: App) => {
    app.component(_IconRotationOne.name, _IconRotationOne);
  }
});

export default IconRotationOne;