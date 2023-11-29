import type { App } from 'vue';
import _IconClothesCardigan from './icon-clothes-cardigan.vue';

const IconClothesCardigan = Object.assign(_IconClothesCardigan, {
  install: (app: App) => {
    app.component(_IconClothesCardigan.name, _IconClothesCardigan);
  }
});

export default IconClothesCardigan;