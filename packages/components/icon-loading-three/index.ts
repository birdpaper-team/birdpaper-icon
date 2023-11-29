import type { App } from 'vue';
import _IconLoadingThree from './icon-loading-three.vue';

const IconLoadingThree = Object.assign(_IconLoadingThree, {
  install: (app: App) => {
    app.component(_IconLoadingThree.name, _IconLoadingThree);
  }
});

export default IconLoadingThree;