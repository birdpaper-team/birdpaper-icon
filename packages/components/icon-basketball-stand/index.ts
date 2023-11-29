import type { App } from 'vue';
import _IconBasketballStand from './icon-basketball-stand.vue';

const IconBasketballStand = Object.assign(_IconBasketballStand, {
  install: (app: App) => {
    app.component(_IconBasketballStand.name, _IconBasketballStand);
  }
});

export default IconBasketballStand;