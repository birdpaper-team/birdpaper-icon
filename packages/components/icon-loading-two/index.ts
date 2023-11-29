import type { App } from 'vue';
import _IconLoadingTwo from './icon-loading-two.vue';

const IconLoadingTwo = Object.assign(_IconLoadingTwo, {
  install: (app: App) => {
    app.component(_IconLoadingTwo.name, _IconLoadingTwo);
  }
});

export default IconLoadingTwo;