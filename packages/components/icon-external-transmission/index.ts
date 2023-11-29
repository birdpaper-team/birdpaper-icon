import type { App } from 'vue';
import _IconExternalTransmission from './icon-external-transmission.vue';

const IconExternalTransmission = Object.assign(_IconExternalTransmission, {
  install: (app: App) => {
    app.component(_IconExternalTransmission.name, _IconExternalTransmission);
  }
});

export default IconExternalTransmission;