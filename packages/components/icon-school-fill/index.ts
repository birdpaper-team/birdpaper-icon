import type { App } from 'vue';
import _IconSchoolFill from './icon-school-fill.vue';

const IconSchoolFill = Object.assign(_IconSchoolFill, {
  install: (app: App) => {
    app.component(_IconSchoolFill.name, _IconSchoolFill);
  }
});

export default IconSchoolFill;