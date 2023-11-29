import type { App } from 'vue';
import _IconChatForwardFill from './icon-chat-forward-fill.vue';

const IconChatForwardFill = Object.assign(_IconChatForwardFill, {
  install: (app: App) => {
    app.component(_IconChatForwardFill.name, _IconChatForwardFill);
  }
});

export default IconChatForwardFill;