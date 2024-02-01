import type { App } from 'vue';
import _IconChatThreadFill from './icon-chat-thread-fill.vue';

const IconChatThreadFill = Object.assign(_IconChatThreadFill, {
  install: (app: App) => {
    app.component(_IconChatThreadFill.name, _IconChatThreadFill);
  }
});

export default IconChatThreadFill;