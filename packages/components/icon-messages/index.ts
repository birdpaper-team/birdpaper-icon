import type { App } from 'vue';
import _IconMessages from './icon-messages.vue';

const IconMessages = Object.assign(_IconMessages, {
  install: (app: App) => {
    app.component(_IconMessages.name, _IconMessages);
  }
});

export default IconMessages;