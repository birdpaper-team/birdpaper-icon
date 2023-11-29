import type { App } from 'vue';
import _IconHairDryer from './icon-hair-dryer.vue';

const IconHairDryer = Object.assign(_IconHairDryer, {
  install: (app: App) => {
    app.component(_IconHairDryer.name, _IconHairDryer);
  }
});

export default IconHairDryer;