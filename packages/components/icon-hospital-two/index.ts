import type { App } from 'vue';
import _IconHospitalTwo from './icon-hospital-two.vue';

const IconHospitalTwo = Object.assign(_IconHospitalTwo, {
  install: (app: App) => {
    app.component(_IconHospitalTwo.name, _IconHospitalTwo);
  }
});

export default IconHospitalTwo;