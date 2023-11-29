import type { App } from 'vue';
import _IconClothesShortSleeve from './icon-clothes-short-sleeve.vue';

const IconClothesShortSleeve = Object.assign(_IconClothesShortSleeve, {
  install: (app: App) => {
    app.component(_IconClothesShortSleeve.name, _IconClothesShortSleeve);
  }
});

export default IconClothesShortSleeve;