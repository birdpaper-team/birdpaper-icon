import type { App } from 'vue';
import _IconMedicalMark from './icon-medical-mark.vue';

const IconMedicalMark = Object.assign(_IconMedicalMark, {
  install: (app: App) => {
    app.component(_IconMedicalMark.name, _IconMedicalMark);
  }
});

export default IconMedicalMark;