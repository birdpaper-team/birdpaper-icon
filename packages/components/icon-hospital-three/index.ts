import type { App } from 'vue';
import _IconHospitalThree from './icon-hospital-three.vue';

const IconHospitalThree = Object.assign(_IconHospitalThree, {
  install: (app: App) => {
    app.component(_IconHospitalThree.name, _IconHospitalThree);
  }
});

export default IconHospitalThree;