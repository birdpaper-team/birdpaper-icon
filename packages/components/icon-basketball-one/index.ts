import type { App } from 'vue';
import _IconBasketballOne from './icon-basketball-one.vue';

const IconBasketballOne = Object.assign(_IconBasketballOne, {
  install: (app: App) => {
    app.component(_IconBasketballOne.name, _IconBasketballOne);
  }
});

export default IconBasketballOne;