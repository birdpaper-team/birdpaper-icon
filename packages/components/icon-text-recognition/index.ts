import type { App } from 'vue';
import _IconTextRecognition from './icon-text-recognition.vue';

const IconTextRecognition = Object.assign(_IconTextRecognition, {
  install: (app: App) => {
    app.component(_IconTextRecognition.name, _IconTextRecognition);
  }
});

export default IconTextRecognition;