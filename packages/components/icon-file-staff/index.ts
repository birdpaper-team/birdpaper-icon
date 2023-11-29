import type { App } from 'vue';
import _IconFileStaff from './icon-file-staff.vue';

const IconFileStaff = Object.assign(_IconFileStaff, {
  install: (app: App) => {
    app.component(_IconFileStaff.name, _IconFileStaff);
  }
});

export default IconFileStaff;