import type { App } from 'vue';
import _IconAuctionFill from './icon-auction-fill.vue';

const IconAuctionFill = Object.assign(_IconAuctionFill, {
  install: (app: App) => {
    app.component(_IconAuctionFill.name, _IconAuctionFill);
  }
});

export default IconAuctionFill;