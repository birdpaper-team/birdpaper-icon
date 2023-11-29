import type { App } from 'vue';
import _IconChatPrivateLine from './icon-chat-private-line.vue';

const IconChatPrivateLine = Object.assign(_IconChatPrivateLine, {
  install: (app: App) => {
    app.component(_IconChatPrivateLine.name, _IconChatPrivateLine);
  }
});

export default IconChatPrivateLine;