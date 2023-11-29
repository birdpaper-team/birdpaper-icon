import type { App } from 'vue';
import _IconMedicineBottleLine from './icon-medicine-bottle-line.vue';

const IconMedicineBottleLine = Object.assign(_IconMedicineBottleLine, {
  install: (app: App) => {
    app.component(_IconMedicineBottleLine.name, _IconMedicineBottleLine);
  }
});

export default IconMedicineBottleLine;