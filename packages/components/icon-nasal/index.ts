import type { App } from 'vue';
import _IconNasal from './icon-nasal.vue';

const IconNasal = Object.assign(_IconNasal, {
  install: (app: App) => {
    app.component(_IconNasal.name, _IconNasal);
  }
});

export default IconNasal;