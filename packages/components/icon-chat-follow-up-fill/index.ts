import type { App } from 'vue';
import _IconChatFollowUpFill from './icon-chat-follow-up-fill.vue';

const IconChatFollowUpFill = Object.assign(_IconChatFollowUpFill, {
  install: (app: App) => {
    app.component(_IconChatFollowUpFill.name, _IconChatFollowUpFill);
  }
});

export default IconChatFollowUpFill;