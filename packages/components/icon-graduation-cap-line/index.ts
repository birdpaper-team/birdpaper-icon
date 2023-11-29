import type { App } from 'vue';
import _IconGraduationCapLine from './icon-graduation-cap-line.vue';

const IconGraduationCapLine = Object.assign(_IconGraduationCapLine, {
  install: (app: App) => {
    app.component(_IconGraduationCapLine.name, _IconGraduationCapLine);
  }
});

export default IconGraduationCapLine;