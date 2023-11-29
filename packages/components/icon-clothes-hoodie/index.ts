import type { App } from 'vue';
import _IconClothesHoodie from './icon-clothes-hoodie.vue';

const IconClothesHoodie = Object.assign(_IconClothesHoodie, {
  install: (app: App) => {
    app.component(_IconClothesHoodie.name, _IconClothesHoodie);
  }
});

export default IconClothesHoodie;