import type { App } from 'vue';
import _IconChatNewLine from './icon-chat-new-line.vue';

const IconChatNewLine = Object.assign(_IconChatNewLine, {
  install: (app: App) => {
    app.component(_IconChatNewLine.name, _IconChatNewLine);
  }
});

export default IconChatNewLine;