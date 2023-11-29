import type { App } from 'vue';
import _IconSlightlyFrowningFaceWhitOpenMouth from './icon-slightly-frowning-face-whit-open-mouth.vue';

const IconSlightlyFrowningFaceWhitOpenMouth = Object.assign(_IconSlightlyFrowningFaceWhitOpenMouth, {
  install: (app: App) => {
    app.component(_IconSlightlyFrowningFaceWhitOpenMouth.name, _IconSlightlyFrowningFaceWhitOpenMouth);
  }
});

export default IconSlightlyFrowningFaceWhitOpenMouth;