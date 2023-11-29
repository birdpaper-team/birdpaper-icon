import type { App } from 'vue';
import _IconVoiceInput from './icon-voice-input.vue';

const IconVoiceInput = Object.assign(_IconVoiceInput, {
  install: (app: App) => {
    app.component(_IconVoiceInput.name, _IconVoiceInput);
  }
});

export default IconVoiceInput;