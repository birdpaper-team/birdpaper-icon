import type { App } from 'vue';
import _IconChatDeleteLine from './icon-chat-delete-line.vue';

const IconChatDeleteLine = Object.assign(_IconChatDeleteLine, {
  install: (app: App) => {
    app.component(_IconChatDeleteLine.name, _IconChatDeleteLine);
  }
});

export default IconChatDeleteLine;