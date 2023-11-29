import type { App } from 'vue';
import _IconStretchingOne from './icon-stretching-one.vue';

const IconStretchingOne = Object.assign(_IconStretchingOne, {
  install: (app: App) => {
    app.component(_IconStretchingOne.name, _IconStretchingOne);
  }
});

export default IconStretchingOne;