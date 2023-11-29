import type { App } from 'vue';
import _IconChatHeartFill from './icon-chat-heart-fill.vue';

const IconChatHeartFill = Object.assign(_IconChatHeartFill, {
  install: (app: App) => {
    app.component(_IconChatHeartFill.name, _IconChatHeartFill);
  }
});

export default IconChatHeartFill;