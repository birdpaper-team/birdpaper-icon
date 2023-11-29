import type { App } from 'vue';
import _IconHealthyRecognition from './icon-healthy-recognition.vue';

const IconHealthyRecognition = Object.assign(_IconHealthyRecognition, {
  install: (app: App) => {
    app.component(_IconHealthyRecognition.name, _IconHealthyRecognition);
  }
});

export default IconHealthyRecognition;