import type { App } from 'vue';
import _IconChatSmile2Fill from './icon-chat-smile-2-fill.vue';

const IconChatSmile2Fill = Object.assign(_IconChatSmile2Fill, {
  install: (app: App) => {
    app.component(_IconChatSmile2Fill.name, _IconChatSmile2Fill);
  }
});

export default IconChatSmile2Fill;