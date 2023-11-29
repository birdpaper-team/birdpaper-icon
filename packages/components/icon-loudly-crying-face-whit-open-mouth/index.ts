import type { App } from 'vue';
import _IconLoudlyCryingFaceWhitOpenMouth from './icon-loudly-crying-face-whit-open-mouth.vue';

const IconLoudlyCryingFaceWhitOpenMouth = Object.assign(_IconLoudlyCryingFaceWhitOpenMouth, {
  install: (app: App) => {
    app.component(_IconLoudlyCryingFaceWhitOpenMouth.name, _IconLoudlyCryingFaceWhitOpenMouth);
  }
});

export default IconLoudlyCryingFaceWhitOpenMouth;