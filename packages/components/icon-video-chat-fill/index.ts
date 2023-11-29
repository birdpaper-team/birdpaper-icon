import type { App } from 'vue';
import _IconVideoChatFill from './icon-video-chat-fill.vue';

const IconVideoChatFill = Object.assign(_IconVideoChatFill, {
  install: (app: App) => {
    app.component(_IconVideoChatFill.name, _IconVideoChatFill);
  }
});

export default IconVideoChatFill;