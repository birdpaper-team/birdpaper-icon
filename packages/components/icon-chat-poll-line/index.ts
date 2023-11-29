import type { App } from 'vue';
import _IconChatPollLine from './icon-chat-poll-line.vue';

const IconChatPollLine = Object.assign(_IconChatPollLine, {
  install: (app: App) => {
    app.component(_IconChatPollLine.name, _IconChatPollLine);
  }
});

export default IconChatPollLine;