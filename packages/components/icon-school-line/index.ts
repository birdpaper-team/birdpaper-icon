import type { App } from 'vue';
import _IconSchoolLine from './icon-school-line.vue';

const IconSchoolLine = Object.assign(_IconSchoolLine, {
  install: (app: App) => {
    app.component(_IconSchoolLine.name, _IconSchoolLine);
  }
});

export default IconSchoolLine;