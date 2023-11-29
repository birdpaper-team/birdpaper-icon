import type { App } from 'vue';
import _IconChatSettingsLine from './icon-chat-settings-line.vue';

const IconChatSettingsLine = Object.assign(_IconChatSettingsLine, {
  install: (app: App) => {
    app.component(_IconChatSettingsLine.name, _IconChatSettingsLine);
  }
});

export default IconChatSettingsLine;