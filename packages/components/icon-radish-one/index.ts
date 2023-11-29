import type { App } from 'vue';
import _IconRadishOne from './icon-radish-one.vue';

const IconRadishOne = Object.assign(_IconRadishOne, {
  install: (app: App) => {
    app.component(_IconRadishOne.name, _IconRadishOne);
  }
});

export default IconRadishOne;