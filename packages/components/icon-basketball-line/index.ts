import type { App } from 'vue';
import _IconBasketballLine from './icon-basketball-line.vue';

const IconBasketballLine = Object.assign(_IconBasketballLine, {
  install: (app: App) => {
    app.component(_IconBasketballLine.name, _IconBasketballLine);
  }
});

export default IconBasketballLine;