import type { App } from 'vue';
import _IconEggOne from './icon-egg-one.vue';

const IconEggOne = Object.assign(_IconEggOne, {
  install: (app: App) => {
    app.component(_IconEggOne.name, _IconEggOne);
  }
});

export default IconEggOne;