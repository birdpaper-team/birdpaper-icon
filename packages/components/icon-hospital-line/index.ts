import type { App } from 'vue';
import _IconHospitalLine from './icon-hospital-line.vue';

const IconHospitalLine = Object.assign(_IconHospitalLine, {
  install: (app: App) => {
    app.component(_IconHospitalLine.name, _IconHospitalLine);
  }
});

export default IconHospitalLine;