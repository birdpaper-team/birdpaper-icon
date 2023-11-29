import type { App } from 'vue';
import _IconFishOne from './icon-fish-one.vue';

const IconFishOne = Object.assign(_IconFishOne, {
  install: (app: App) => {
    app.component(_IconFishOne.name, _IconFishOne);
  }
});

export default IconFishOne;