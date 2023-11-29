import type { App } from 'vue';
import _IconChatPollFill from './icon-chat-poll-fill.vue';

const IconChatPollFill = Object.assign(_IconChatPollFill, {
  install: (app: App) => {
    app.component(_IconChatPollFill.name, _IconChatPollFill);
  }
});

export default IconChatPollFill;