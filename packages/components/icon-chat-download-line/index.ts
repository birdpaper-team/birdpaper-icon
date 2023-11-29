import type { App } from 'vue';
import _IconChatDownloadLine from './icon-chat-download-line.vue';

const IconChatDownloadLine = Object.assign(_IconChatDownloadLine, {
  install: (app: App) => {
    app.component(_IconChatDownloadLine.name, _IconChatDownloadLine);
  }
});

export default IconChatDownloadLine;