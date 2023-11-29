import type { App } from 'vue';
import _IconFileLockOne from './icon-file-lock-one.vue';

const IconFileLockOne = Object.assign(_IconFileLockOne, {
  install: (app: App) => {
    app.component(_IconFileLockOne.name, _IconFileLockOne);
  }
});

export default IconFileLockOne;