import type { App } from 'vue';
import _IconProductHuntLine from './icon-product-hunt-line.vue';

const IconProductHuntLine = Object.assign(_IconProductHuntLine, {
  install: (app: App) => {
    app.component(_IconProductHuntLine.name, _IconProductHuntLine);
  }
});

export default IconProductHuntLine;