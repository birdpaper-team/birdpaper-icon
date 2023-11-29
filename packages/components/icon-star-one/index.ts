import type { App } from 'vue';
import _IconStarOne from './icon-star-one.vue';

const IconStarOne = Object.assign(_IconStarOne, {
  install: (app: App) => {
    app.component(_IconStarOne.name, _IconStarOne);
  }
});

export default IconStarOne;