import type { App } from 'vue';
import _IconChatNewFill from './icon-chat-new-fill.vue';

const IconChatNewFill = Object.assign(_IconChatNewFill, {
  install: (app: App) => {
    app.component(_IconChatNewFill.name, _IconChatNewFill);
  }
});

export default IconChatNewFill;