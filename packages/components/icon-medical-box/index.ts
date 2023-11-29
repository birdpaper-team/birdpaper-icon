import type { App } from 'vue';
import _IconMedicalBox from './icon-medical-box.vue';

const IconMedicalBox = Object.assign(_IconMedicalBox, {
  install: (app: App) => {
    app.component(_IconMedicalBox.name, _IconMedicalBox);
  }
});

export default IconMedicalBox;