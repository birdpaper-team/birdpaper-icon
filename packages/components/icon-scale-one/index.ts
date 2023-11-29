import type { App } from 'vue';
import _IconScaleOne from './icon-scale-one.vue';

const IconScaleOne = Object.assign(_IconScaleOne, {
  install: (app: App) => {
    app.component(_IconScaleOne.name, _IconScaleOne);
  }
});

export default IconScaleOne;