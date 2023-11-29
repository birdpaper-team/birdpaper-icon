import type { App } from 'vue';
import _IconFileStaffOne from './icon-file-staff-one.vue';

const IconFileStaffOne = Object.assign(_IconFileStaffOne, {
  install: (app: App) => {
    app.component(_IconFileStaffOne.name, _IconFileStaffOne);
  }
});

export default IconFileStaffOne;