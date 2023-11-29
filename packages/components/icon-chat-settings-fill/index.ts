import type { App } from 'vue';
import _IconChatSettingsFill from './icon-chat-settings-fill.vue';

const IconChatSettingsFill = Object.assign(_IconChatSettingsFill, {
  install: (app: App) => {
    app.component(_IconChatSettingsFill.name, _IconChatSettingsFill);
  }
});

export default IconChatSettingsFill;