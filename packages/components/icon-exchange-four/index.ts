import type { App } from 'vue';
import _IconExchangeFour from './icon-exchange-four.vue';

const IconExchangeFour = Object.assign(_IconExchangeFour, {
  install: (app: App) => {
    app.component(_IconExchangeFour.name, _IconExchangeFour);
  }
});

export default IconExchangeFour;