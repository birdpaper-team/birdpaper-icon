import type { App } from 'vue';
import _IconElectronicLocksClose from './icon-electronic-locks-close.vue';

const IconElectronicLocksClose = Object.assign(_IconElectronicLocksClose, {
  install: (app: App) => {
    app.component(_IconElectronicLocksClose.name, _IconElectronicLocksClose);
  }
});

export default IconElectronicLocksClose;