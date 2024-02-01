import type { App } from 'vue';
import _IconChatThreadLine from './icon-chat-thread-line.vue';

const IconChatThreadLine = Object.assign(_IconChatThreadLine, {
  install: (app: App) => {
    app.component(_IconChatThreadLine.name, _IconChatThreadLine);
  }
});

export default IconChatThreadLine;