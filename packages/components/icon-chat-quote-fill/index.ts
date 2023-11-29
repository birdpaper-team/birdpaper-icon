import type { App } from 'vue';
import _IconChatQuoteFill from './icon-chat-quote-fill.vue';

const IconChatQuoteFill = Object.assign(_IconChatQuoteFill, {
  install: (app: App) => {
    app.component(_IconChatQuoteFill.name, _IconChatQuoteFill);
  }
});

export default IconChatQuoteFill;