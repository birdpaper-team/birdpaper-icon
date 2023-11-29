import type { App } from 'vue';
import _IconCryingBaby from './icon-crying-baby.vue';

const IconCryingBaby = Object.assign(_IconCryingBaby, {
  install: (app: App) => {
    app.component(_IconCryingBaby.name, _IconCryingBaby);
  }
});

export default IconCryingBaby;