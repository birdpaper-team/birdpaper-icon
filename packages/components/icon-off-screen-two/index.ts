import type { App } from 'vue';
import _IconOffScreenTwo from './icon-off-screen-two.vue';

const IconOffScreenTwo = Object.assign(_IconOffScreenTwo, {
  install: (app: App) => {
    app.component(_IconOffScreenTwo.name, _IconOffScreenTwo);
  }
});

export default IconOffScreenTwo;