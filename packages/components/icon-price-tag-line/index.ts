import type { App } from 'vue';
import _IconPriceTagLine from './icon-price-tag-line.vue';

const IconPriceTagLine = Object.assign(_IconPriceTagLine, {
  install: (app: App) => {
    app.component(_IconPriceTagLine.name, _IconPriceTagLine);
  }
});

export default IconPriceTagLine;