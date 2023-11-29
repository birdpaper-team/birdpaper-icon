import type { App } from 'vue';
import _IconChatCheckFill from './icon-chat-check-fill.vue';

const IconChatCheckFill = Object.assign(_IconChatCheckFill, {
  install: (app: App) => {
    app.component(_IconChatCheckFill.name, _IconChatCheckFill);
  }
});

export default IconChatCheckFill;