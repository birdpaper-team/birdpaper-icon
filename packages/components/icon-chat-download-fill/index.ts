import type { App } from 'vue';
import _IconChatDownloadFill from './icon-chat-download-fill.vue';

const IconChatDownloadFill = Object.assign(_IconChatDownloadFill, {
  install: (app: App) => {
    app.component(_IconChatDownloadFill.name, _IconChatDownloadFill);
  }
});

export default IconChatDownloadFill;