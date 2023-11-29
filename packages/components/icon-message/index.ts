import type { App } from 'vue';
import _IconMessage from './icon-message.vue';

const IconMessage = Object.assign(_IconMessage, {
  install: (app: App) => {
    app.component(_IconMessage.name, _IconMessage);
  }
});

export default IconMessage;