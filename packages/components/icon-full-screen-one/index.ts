import type { App } from 'vue';
import _IconFullScreenOne from './icon-full-screen-one.vue';

const IconFullScreenOne = Object.assign(_IconFullScreenOne, {
  install: (app: App) => {
    app.component(_IconFullScreenOne.name, _IconFullScreenOne);
  }
});

export default IconFullScreenOne;