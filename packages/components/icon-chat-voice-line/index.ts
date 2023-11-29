import type { App } from 'vue';
import _IconChatVoiceLine from './icon-chat-voice-line.vue';

const IconChatVoiceLine = Object.assign(_IconChatVoiceLine, {
  install: (app: App) => {
    app.component(_IconChatVoiceLine.name, _IconChatVoiceLine);
  }
});

export default IconChatVoiceLine;