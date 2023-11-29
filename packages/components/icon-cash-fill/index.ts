import type { App } from 'vue';
import _IconCashFill from './icon-cash-fill.vue';

const IconCashFill = Object.assign(_IconCashFill, {
  install: (app: App) => {
    app.component(_IconCashFill.name, _IconCashFill);
  }
});

export default IconCashFill;