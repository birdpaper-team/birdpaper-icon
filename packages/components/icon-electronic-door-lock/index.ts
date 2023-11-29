import type { App } from 'vue';
import _IconElectronicDoorLock from './icon-electronic-door-lock.vue';

const IconElectronicDoorLock = Object.assign(_IconElectronicDoorLock, {
  install: (app: App) => {
    app.component(_IconElectronicDoorLock.name, _IconElectronicDoorLock);
  }
});

export default IconElectronicDoorLock;