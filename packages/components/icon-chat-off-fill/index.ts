import type { App } from 'vue';
import _IconChatOffFill from './icon-chat-off-fill.vue';

const IconChatOffFill = Object.assign(_IconChatOffFill, {
  install: (app: App) => {
    app.component(_IconChatOffFill.name, _IconChatOffFill);
  }
});

export default IconChatOffFill;