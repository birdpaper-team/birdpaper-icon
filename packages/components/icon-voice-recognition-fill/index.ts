import type { App } from 'vue';
import _IconVoiceRecognitionFill from './icon-voice-recognition-fill.vue';

const IconVoiceRecognitionFill = Object.assign(_IconVoiceRecognitionFill, {
  install: (app: App) => {
    app.component(_IconVoiceRecognitionFill.name, _IconVoiceRecognitionFill);
  }
});

export default IconVoiceRecognitionFill;