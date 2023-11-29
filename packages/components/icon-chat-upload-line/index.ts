import type { App } from 'vue';
import _IconChatUploadLine from './icon-chat-upload-line.vue';

const IconChatUploadLine = Object.assign(_IconChatUploadLine, {
  install: (app: App) => {
    app.component(_IconChatUploadLine.name, _IconChatUploadLine);
  }
});

export default IconChatUploadLine;