import type { App } from 'vue';
import _IconChatOffLine from './icon-chat-off-line.vue';

const IconChatOffLine = Object.assign(_IconChatOffLine, {
  install: (app: App) => {
    app.component(_IconChatOffLine.name, _IconChatOffLine);
  }
});

export default IconChatOffLine;