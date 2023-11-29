import type { App } from 'vue';
import _IconChatHistoryFill from './icon-chat-history-fill.vue';

const IconChatHistoryFill = Object.assign(_IconChatHistoryFill, {
  install: (app: App) => {
    app.component(_IconChatHistoryFill.name, _IconChatHistoryFill);
  }
});

export default IconChatHistoryFill;