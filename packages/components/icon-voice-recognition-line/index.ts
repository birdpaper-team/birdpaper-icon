import type { App } from 'vue';
import _IconVoiceRecognitionLine from './icon-voice-recognition-line.vue';

const IconVoiceRecognitionLine = Object.assign(_IconVoiceRecognitionLine, {
  install: (app: App) => {
    app.component(_IconVoiceRecognitionLine.name, _IconVoiceRecognitionLine);
  }
});

export default IconVoiceRecognitionLine;