import type { App } from 'vue';
import _IconTaxiFill from './icon-taxi-fill.vue';

const IconTaxiFill = Object.assign(_IconTaxiFill, {
  install: (app: App) => {
    app.component(_IconTaxiFill.name, _IconTaxiFill);
  }
});

export default IconTaxiFill;