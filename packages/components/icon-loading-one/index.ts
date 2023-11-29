import type { App } from 'vue';
import _IconLoadingOne from './icon-loading-one.vue';

const IconLoadingOne = Object.assign(_IconLoadingOne, {
  install: (app: App) => {
    app.component(_IconLoadingOne.name, _IconLoadingOne);
  }
});

export default IconLoadingOne;