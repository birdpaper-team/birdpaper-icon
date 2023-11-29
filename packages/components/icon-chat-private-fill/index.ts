import type { App } from 'vue';
import _IconChatPrivateFill from './icon-chat-private-fill.vue';

const IconChatPrivateFill = Object.assign(_IconChatPrivateFill, {
  install: (app: App) => {
    app.component(_IconChatPrivateFill.name, _IconChatPrivateFill);
  }
});

export default IconChatPrivateFill;