import type { App } from 'vue';
import _IconCharacterRecognitionFill from './icon-character-recognition-fill.vue';

const IconCharacterRecognitionFill = Object.assign(_IconCharacterRecognitionFill, {
  install: (app: App) => {
    app.component(_IconCharacterRecognitionFill.name, _IconCharacterRecognitionFill);
  }
});

export default IconCharacterRecognitionFill;