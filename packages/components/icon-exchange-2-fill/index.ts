import type { App } from 'vue';
import _IconExchange2Fill from './icon-exchange-2-fill.vue';

const IconExchange2Fill = Object.assign(_IconExchange2Fill, {
  install: (app: App) => {
    app.component(_IconExchange2Fill.name, _IconExchange2Fill);
  }
});

export default IconExchange2Fill;