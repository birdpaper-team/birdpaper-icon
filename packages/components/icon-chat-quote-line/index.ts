import type { App } from 'vue';
import _IconChatQuoteLine from './icon-chat-quote-line.vue';

const IconChatQuoteLine = Object.assign(_IconChatQuoteLine, {
  install: (app: App) => {
    app.component(_IconChatQuoteLine.name, _IconChatQuoteLine);
  }
});

export default IconChatQuoteLine;