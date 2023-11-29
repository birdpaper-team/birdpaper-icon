import type { App } from 'vue';
import _IconMedicineBottleFill from './icon-medicine-bottle-fill.vue';

const IconMedicineBottleFill = Object.assign(_IconMedicineBottleFill, {
  install: (app: App) => {
    app.component(_IconMedicineBottleFill.name, _IconMedicineBottleFill);
  }
});

export default IconMedicineBottleFill;