import type { App } from 'vue';
import _IconTextMessage from './icon-text-message.vue';

const IconTextMessage = Object.assign(_IconTextMessage, {
  install: (app: App) => {
    app.component(_IconTextMessage.name, _IconTextMessage);
  }
});

export default IconTextMessage;