import type { App } from 'vue';
import _IconBasketballFill from './icon-basketball-fill.vue';

const IconBasketballFill = Object.assign(_IconBasketballFill, {
  install: (app: App) => {
    app.component(_IconBasketballFill.name, _IconBasketballFill);
  }
});

export default IconBasketballFill;