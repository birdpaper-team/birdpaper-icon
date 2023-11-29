import type { App } from 'vue';
import _IconMedicalFiles from './icon-medical-files.vue';

const IconMedicalFiles = Object.assign(_IconMedicalFiles, {
  install: (app: App) => {
    app.component(_IconMedicalFiles.name, _IconMedicalFiles);
  }
});

export default IconMedicalFiles;