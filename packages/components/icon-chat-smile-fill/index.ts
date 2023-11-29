import type { App } from 'vue';
import _IconChatSmileFill from './icon-chat-smile-fill.vue';

const IconChatSmileFill = Object.assign(_IconChatSmileFill, {
  install: (app: App) => {
    app.component(_IconChatSmileFill.name, _IconChatSmileFill);
  }
});

export default IconChatSmileFill;