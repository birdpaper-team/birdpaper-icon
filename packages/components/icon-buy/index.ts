import type { App } from 'vue';
import _IconBuy from './icon-buy.vue';

const IconBuy = Object.assign(_IconBuy, {
  install: (app: App) => {
    app.component(_IconBuy.name, _IconBuy);
  }
});

export default IconBuy;