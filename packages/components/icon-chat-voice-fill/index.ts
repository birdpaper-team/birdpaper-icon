import type { App } from 'vue';
import _IconChatVoiceFill from './icon-chat-voice-fill.vue';

const IconChatVoiceFill = Object.assign(_IconChatVoiceFill, {
  install: (app: App) => {
    app.component(_IconChatVoiceFill.name, _IconChatVoiceFill);
  }
});

export default IconChatVoiceFill;