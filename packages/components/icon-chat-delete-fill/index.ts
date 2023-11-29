import type { App } from 'vue';
import _IconChatDeleteFill from './icon-chat-delete-fill.vue';

const IconChatDeleteFill = Object.assign(_IconChatDeleteFill, {
  install: (app: App) => {
    app.component(_IconChatDeleteFill.name, _IconChatDeleteFill);
  }
});

export default IconChatDeleteFill;