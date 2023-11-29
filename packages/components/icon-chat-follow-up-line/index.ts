import type { App } from 'vue';
import _IconChatFollowUpLine from './icon-chat-follow-up-line.vue';

const IconChatFollowUpLine = Object.assign(_IconChatFollowUpLine, {
  install: (app: App) => {
    app.component(_IconChatFollowUpLine.name, _IconChatFollowUpLine);
  }
});

export default IconChatFollowUpLine;