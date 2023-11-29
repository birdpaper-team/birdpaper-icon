import type { App } from 'vue';
import _IconSdCardMiniLine from './icon-sd-card-mini-line.vue';

const IconSdCardMiniLine = Object.assign(_IconSdCardMiniLine, {
  install: (app: App) => {
    app.component(_IconSdCardMiniLine.name, _IconSdCardMiniLine);
  }
});

export default IconSdCardMiniLine;