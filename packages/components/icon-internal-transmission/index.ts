import type { App } from 'vue';
import _IconInternalTransmission from './icon-internal-transmission.vue';

const IconInternalTransmission = Object.assign(_IconInternalTransmission, {
  install: (app: App) => {
    app.component(_IconInternalTransmission.name, _IconInternalTransmission);
  }
});

export default IconInternalTransmission;