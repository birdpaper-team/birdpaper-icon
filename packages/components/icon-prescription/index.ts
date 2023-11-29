import type { App } from 'vue';
import _IconPrescription from './icon-prescription.vue';

const IconPrescription = Object.assign(_IconPrescription, {
  install: (app: App) => {
    app.component(_IconPrescription.name, _IconPrescription);
  }
});

export default IconPrescription;