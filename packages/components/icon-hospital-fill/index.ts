import type { App } from 'vue';
import _IconHospitalFill from './icon-hospital-fill.vue';

const IconHospitalFill = Object.assign(_IconHospitalFill, {
  install: (app: App) => {
    app.component(_IconHospitalFill.name, _IconHospitalFill);
  }
});

export default IconHospitalFill;