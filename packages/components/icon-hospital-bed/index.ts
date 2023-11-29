import type { App } from 'vue';
import _IconHospitalBed from './icon-hospital-bed.vue';

const IconHospitalBed = Object.assign(_IconHospitalBed, {
  install: (app: App) => {
    app.component(_IconHospitalBed.name, _IconHospitalBed);
  }
});

export default IconHospitalBed;