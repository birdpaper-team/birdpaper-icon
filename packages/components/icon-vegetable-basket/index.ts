import type { App } from 'vue';
import _IconVegetableBasket from './icon-vegetable-basket.vue';

const IconVegetableBasket = Object.assign(_IconVegetableBasket, {
  install: (app: App) => {
    app.component(_IconVegetableBasket.name, _IconVegetableBasket);
  }
});

export default IconVegetableBasket;