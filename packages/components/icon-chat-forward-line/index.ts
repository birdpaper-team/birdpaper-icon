import type { App } from 'vue';
import _IconChatForwardLine from './icon-chat-forward-line.vue';

const IconChatForwardLine = Object.assign(_IconChatForwardLine, {
  install: (app: App) => {
    app.component(_IconChatForwardLine.name, _IconChatForwardLine);
  }
});

export default IconChatForwardLine;