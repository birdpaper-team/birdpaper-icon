import type { App } from 'vue';
import _IconElectronicLocksOpen from './icon-electronic-locks-open.vue';

const IconElectronicLocksOpen = Object.assign(_IconElectronicLocksOpen, {
  install: (app: App) => {
    app.component(_IconElectronicLocksOpen.name, _IconElectronicLocksOpen);
  }
});

export default IconElectronicLocksOpen;