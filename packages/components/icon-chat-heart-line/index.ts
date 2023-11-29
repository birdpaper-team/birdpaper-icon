import type { App } from 'vue';
import _IconChatHeartLine from './icon-chat-heart-line.vue';

const IconChatHeartLine = Object.assign(_IconChatHeartLine, {
  install: (app: App) => {
    app.component(_IconChatHeartLine.name, _IconChatHeartLine);
  }
});

export default IconChatHeartLine;