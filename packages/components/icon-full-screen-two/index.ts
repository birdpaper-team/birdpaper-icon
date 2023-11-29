import type { App } from 'vue';
import _IconFullScreenTwo from './icon-full-screen-two.vue';

const IconFullScreenTwo = Object.assign(_IconFullScreenTwo, {
  install: (app: App) => {
    app.component(_IconFullScreenTwo.name, _IconFullScreenTwo);
  }
});

export default IconFullScreenTwo;