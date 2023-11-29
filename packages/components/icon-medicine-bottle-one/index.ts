import type { App } from 'vue';
import _IconMedicineBottleOne from './icon-medicine-bottle-one.vue';

const IconMedicineBottleOne = Object.assign(_IconMedicineBottleOne, {
  install: (app: App) => {
    app.component(_IconMedicineBottleOne.name, _IconMedicineBottleOne);
  }
});

export default IconMedicineBottleOne;