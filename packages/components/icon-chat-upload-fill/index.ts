import type { App } from 'vue';
import _IconChatUploadFill from './icon-chat-upload-fill.vue';

const IconChatUploadFill = Object.assign(_IconChatUploadFill, {
  install: (app: App) => {
    app.component(_IconChatUploadFill.name, _IconChatUploadFill);
  }
});

export default IconChatUploadFill;