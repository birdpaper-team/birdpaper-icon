import type { App } from 'vue';
import _IconOffScreenOne from './icon-off-screen-one.vue';

const IconOffScreenOne = Object.assign(_IconOffScreenOne, {
  install: (app: App) => {
    app.component(_IconOffScreenOne.name, _IconOffScreenOne);
  }
});

export default IconOffScreenOne;