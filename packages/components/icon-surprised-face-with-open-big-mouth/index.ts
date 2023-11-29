import type { App } from 'vue';
import _IconSurprisedFaceWithOpenBigMouth from './icon-surprised-face-with-open-big-mouth.vue';

const IconSurprisedFaceWithOpenBigMouth = Object.assign(_IconSurprisedFaceWithOpenBigMouth, {
  install: (app: App) => {
    app.component(_IconSurprisedFaceWithOpenBigMouth.name, _IconSurprisedFaceWithOpenBigMouth);
  }
});

export default IconSurprisedFaceWithOpenBigMouth;