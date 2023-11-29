import type { App } from 'vue';
import _IconChatSmile2Line from './icon-chat-smile-2-line.vue';

const IconChatSmile2Line = Object.assign(_IconChatSmile2Line, {
  install: (app: App) => {
    app.component(_IconChatSmile2Line.name, _IconChatSmile2Line);
  }
});

export default IconChatSmile2Line;