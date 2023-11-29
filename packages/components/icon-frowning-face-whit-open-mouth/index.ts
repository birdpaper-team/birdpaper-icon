import type { App } from 'vue';
import _IconFrowningFaceWhitOpenMouth from './icon-frowning-face-whit-open-mouth.vue';

const IconFrowningFaceWhitOpenMouth = Object.assign(_IconFrowningFaceWhitOpenMouth, {
  install: (app: App) => {
    app.component(_IconFrowningFaceWhitOpenMouth.name, _IconFrowningFaceWhitOpenMouth);
  }
});

export default IconFrowningFaceWhitOpenMouth;