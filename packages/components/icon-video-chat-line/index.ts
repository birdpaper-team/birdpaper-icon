import type { App } from 'vue';
import _IconVideoChatLine from './icon-video-chat-line.vue';

const IconVideoChatLine = Object.assign(_IconVideoChatLine, {
  install: (app: App) => {
    app.component(_IconVideoChatLine.name, _IconVideoChatLine);
  }
});

export default IconVideoChatLine;