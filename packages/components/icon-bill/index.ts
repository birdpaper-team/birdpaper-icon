import type { App } from 'vue';
import _IconBill from './icon-bill.vue';

const IconBill = Object.assign(_IconBill, {
  install: (app: App) => {
    app.component(_IconBill.name, _IconBill);
  }
});

export default IconBill;