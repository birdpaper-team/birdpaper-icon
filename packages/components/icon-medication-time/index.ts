import type { App } from 'vue';
import _IconMedicationTime from './icon-medication-time.vue';

const IconMedicationTime = Object.assign(_IconMedicationTime, {
  install: (app: App) => {
    app.component(_IconMedicationTime.name, _IconMedicationTime);
  }
});

export default IconMedicationTime;