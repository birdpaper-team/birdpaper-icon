import type { App } from 'vue';
import _IconChatCheckLine from './icon-chat-check-line.vue';

const IconChatCheckLine = Object.assign(_IconChatCheckLine, {
  install: (app: App) => {
    app.component(_IconChatCheckLine.name, _IconChatCheckLine);
  }
});

export default IconChatCheckLine;