import type { App } from 'vue';
import _IconBottleThree from './icon-bottle-three.vue';

const IconBottleThree = Object.assign(_IconBottleThree, {
  install: (app: App) => {
    app.component(_IconBottleThree.name, _IconBottleThree);
  }
});

export default IconBottleThree;