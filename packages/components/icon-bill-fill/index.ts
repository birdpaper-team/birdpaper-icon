import type { App } from 'vue';
import _IconBillFill from './icon-bill-fill.vue';

const IconBillFill = Object.assign(_IconBillFill, {
  install: (app: App) => {
    app.component(_IconBillFill.name, _IconBillFill);
  }
});

export default IconBillFill;