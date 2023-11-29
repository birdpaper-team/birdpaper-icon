import type { App } from 'vue';
import _IconOrderPlayLine from './icon-order-play-line.vue';

const IconOrderPlayLine = Object.assign(_IconOrderPlayLine, {
  install: (app: App) => {
    app.component(_IconOrderPlayLine.name, _IconOrderPlayLine);
  }
});

export default IconOrderPlayLine;