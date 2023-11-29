import type { App } from 'vue';
import _IconCharacterRecognitionLine from './icon-character-recognition-line.vue';

const IconCharacterRecognitionLine = Object.assign(_IconCharacterRecognitionLine, {
  install: (app: App) => {
    app.component(_IconCharacterRecognitionLine.name, _IconCharacterRecognitionLine);
  }
});

export default IconCharacterRecognitionLine;