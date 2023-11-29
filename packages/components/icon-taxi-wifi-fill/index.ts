import type { App } from 'vue';
import _IconTaxiWifiFill from './icon-taxi-wifi-fill.vue';

const IconTaxiWifiFill = Object.assign(_IconTaxiWifiFill, {
  install: (app: App) => {
    app.component(_IconTaxiWifiFill.name, _IconTaxiWifiFill);
  }
});

export default IconTaxiWifiFill;