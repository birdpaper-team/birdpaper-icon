import type { App } from 'vue';
import _IconGrinningFaceWithOpenMouth from './icon-grinning-face-with-open-mouth.vue';

const IconGrinningFaceWithOpenMouth = Object.assign(_IconGrinningFaceWithOpenMouth, {
  install: (app: App) => {
    app.component(_IconGrinningFaceWithOpenMouth.name, _IconGrinningFaceWithOpenMouth);
  }
});

export default IconGrinningFaceWithOpenMouth;