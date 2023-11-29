import type { App } from 'vue';
import _IconChatSmile3Line from './icon-chat-smile-3-line.vue';

const IconChatSmile3Line = Object.assign(_IconChatSmile3Line, {
  install: (app: App) => {
    app.component(_IconChatSmile3Line.name, _IconChatSmile3Line);
  }
});

export default IconChatSmile3Line;