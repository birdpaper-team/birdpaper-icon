import type { App } from 'vue';
import _IconLoadingFour from './icon-loading-four.vue';

const IconLoadingFour = Object.assign(_IconLoadingFour, {
  install: (app: App) => {
    app.component(_IconLoadingFour.name, _IconLoadingFour);
  }
});

export default IconLoadingFour;