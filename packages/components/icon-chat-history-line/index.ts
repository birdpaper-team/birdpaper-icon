import type { App } from 'vue';
import _IconChatHistoryLine from './icon-chat-history-line.vue';

const IconChatHistoryLine = Object.assign(_IconChatHistoryLine, {
  install: (app: App) => {
    app.component(_IconChatHistoryLine.name, _IconChatHistoryLine);
  }
});

export default IconChatHistoryLine;