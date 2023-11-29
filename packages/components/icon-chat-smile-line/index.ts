import type { App } from 'vue';
import _IconChatSmileLine from './icon-chat-smile-line.vue';

const IconChatSmileLine = Object.assign(_IconChatSmileLine, {
  install: (app: App) => {
    app.component(_IconChatSmileLine.name, _IconChatSmileLine);
  }
});

export default IconChatSmileLine;