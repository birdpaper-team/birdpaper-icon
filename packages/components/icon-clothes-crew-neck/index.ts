import type { App } from 'vue';
import _IconClothesCrewNeck from './icon-clothes-crew-neck.vue';

const IconClothesCrewNeck = Object.assign(_IconClothesCrewNeck, {
  install: (app: App) => {
    app.component(_IconClothesCrewNeck.name, _IconClothesCrewNeck);
  }
});

export default IconClothesCrewNeck;