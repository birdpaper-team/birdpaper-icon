import type { App } from 'vue';
import _IconDiamondThree from './icon-diamond-three.vue';

const IconDiamondThree = Object.assign(_IconDiamondThree, {
  install: (app: App) => {
    app.component(_IconDiamondThree.name, _IconDiamondThree);
  }
});

export default IconDiamondThree;