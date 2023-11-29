import type { App } from 'vue';
import _IconExchangeFill from './icon-exchange-fill.vue';

const IconExchangeFill = Object.assign(_IconExchangeFill, {
  install: (app: App) => {
    app.component(_IconExchangeFill.name, _IconExchangeFill);
  }
});

export default IconExchangeFill;