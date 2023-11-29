import type { App } from 'vue';
import _IconClothesGloves from './icon-clothes-gloves.vue';

const IconClothesGloves = Object.assign(_IconClothesGloves, {
  install: (app: App) => {
    app.component(_IconClothesGloves.name, _IconClothesGloves);
  }
});

export default IconClothesGloves;