import type { App } from 'vue';
import _IconSchool from './icon-school.vue';

const IconSchool = Object.assign(_IconSchool, {
  install: (app: App) => {
    app.component(_IconSchool.name, _IconSchool);
  }
});

export default IconSchool;