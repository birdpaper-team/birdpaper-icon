import type { App } from 'vue';
import _IconWeixinMarket from './icon-weixin-market.vue';

const IconWeixinMarket = Object.assign(_IconWeixinMarket, {
  install: (app: App) => {
    app.component(_IconWeixinMarket.name, _IconWeixinMarket);
  }
});

export default IconWeixinMarket;