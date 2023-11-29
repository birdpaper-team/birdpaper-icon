import type { App } from 'vue';
import _IconVoiceMessage from './icon-voice-message.vue';

const IconVoiceMessage = Object.assign(_IconVoiceMessage, {
  install: (app: App) => {
    app.component(_IconVoiceMessage.name, _IconVoiceMessage);
  }
});

export default IconVoiceMessage;