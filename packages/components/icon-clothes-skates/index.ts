import type { App } from 'vue';
import _IconClothesSkates from './icon-clothes-skates.vue';

const IconClothesSkates = Object.assign(_IconClothesSkates, {
  install: (app: App) => {
    app.component(_IconClothesSkates.name, _IconClothesSkates);
  }
});

export default IconClothesSkates;