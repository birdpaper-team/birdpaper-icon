import type { App } from 'vue';
import _IconIosFaceRecognition from './icon-ios-face-recognition.vue';

const IconIosFaceRecognition = Object.assign(_IconIosFaceRecognition, {
  install: (app: App) => {
    app.component(_IconIosFaceRecognition.name, _IconIosFaceRecognition);
  }
});

export default IconIosFaceRecognition;