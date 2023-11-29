import type { App } from 'vue';
import _IconUserToUserTransmission from './icon-user-to-user-transmission.vue';

const IconUserToUserTransmission = Object.assign(_IconUserToUserTransmission, {
  install: (app: App) => {
    app.component(_IconUserToUserTransmission.name, _IconUserToUserTransmission);
  }
});

export default IconUserToUserTransmission;