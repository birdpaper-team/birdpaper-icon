import type { App } from 'vue';
import _IconCommunication from './icon-communication.vue';

const IconCommunication = Object.assign(_IconCommunication, {
  install: (app: App) => {
    app.component(_IconCommunication.name, _IconCommunication);
  }
});

export default IconCommunication;