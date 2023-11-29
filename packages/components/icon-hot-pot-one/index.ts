import type { App } from 'vue';
import _IconHotPotOne from './icon-hot-pot-one.vue';

const IconHotPotOne = Object.assign(_IconHotPotOne, {
  install: (app: App) => {
    app.component(_IconHotPotOne.name, _IconHotPotOne);
  }
});

export default IconHotPotOne;