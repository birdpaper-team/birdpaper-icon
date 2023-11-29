import type { App } from 'vue';
import _IconChatSmile3Fill from './icon-chat-smile-3-fill.vue';

const IconChatSmile3Fill = Object.assign(_IconChatSmile3Fill, {
  install: (app: App) => {
    app.component(_IconChatSmile3Fill.name, _IconChatSmile3Fill);
  }
});

export default IconChatSmile3Fill;