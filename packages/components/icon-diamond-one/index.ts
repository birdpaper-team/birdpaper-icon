import type { App } from 'vue';
import _IconDiamondOne from './icon-diamond-one.vue';

const IconDiamondOne = Object.assign(_IconDiamondOne, {
  install: (app: App) => {
    app.component(_IconDiamondOne.name, _IconDiamondOne);
  }
});

export default IconDiamondOne;