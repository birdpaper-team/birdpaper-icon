import type { App } from 'vue';
import _IconDiamondTwo from './icon-diamond-two.vue';

const IconDiamondTwo = Object.assign(_IconDiamondTwo, {
  install: (app: App) => {
    app.component(_IconDiamondTwo.name, _IconDiamondTwo);
  }
});

export default IconDiamondTwo;