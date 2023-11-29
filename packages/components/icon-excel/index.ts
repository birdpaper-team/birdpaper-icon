import type { App } from 'vue';
import _IconExcel from './icon-excel.vue';

const IconExcel = Object.assign(_IconExcel, {
  install: (app: App) => {
    app.component(_IconExcel.name, _IconExcel);
  }
});

export default IconExcel;