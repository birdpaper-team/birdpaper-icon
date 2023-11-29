import type { App } from 'vue';
import _IconAuctionLine from './icon-auction-line.vue';

const IconAuctionLine = Object.assign(_IconAuctionLine, {
  install: (app: App) => {
    app.component(_IconAuctionLine.name, _IconAuctionLine);
  }
});

export default IconAuctionLine;