import type { App } from 'vue';
import _IconNailPolishOne from './icon-nail-polish-one.vue';

const IconNailPolishOne = Object.assign(_IconNailPolishOne, {
  install: (app: App) => {
    app.component(_IconNailPolishOne.name, _IconNailPolishOne);
  }
});

export default IconNailPolishOne;