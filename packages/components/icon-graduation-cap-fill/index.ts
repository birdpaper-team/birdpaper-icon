import type { App } from 'vue';
import _IconGraduationCapFill from './icon-graduation-cap-fill.vue';

const IconGraduationCapFill = Object.assign(_IconGraduationCapFill, {
  install: (app: App) => {
    app.component(_IconGraduationCapFill.name, _IconGraduationCapFill);
  }
});

export default IconGraduationCapFill;