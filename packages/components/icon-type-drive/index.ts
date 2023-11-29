import type { App } from 'vue';
import _IconTypeDrive from './icon-type-drive.vue';

const IconTypeDrive = Object.assign(_IconTypeDrive, {
  install: (app: App) => {
    app.component(_IconTypeDrive.name, _IconTypeDrive);
  }
});

export default IconTypeDrive;