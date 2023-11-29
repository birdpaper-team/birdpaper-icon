import type { App } from 'vue';
import _IconHospitalFour from './icon-hospital-four.vue';

const IconHospitalFour = Object.assign(_IconHospitalFour, {
  install: (app: App) => {
    app.component(_IconHospitalFour.name, _IconHospitalFour);
  }
});

export default IconHospitalFour;