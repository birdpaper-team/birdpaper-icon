import type { App } from 'vue';
import _IconGrinningFaceWithTightlyClosedEyesOpenMouth from './icon-grinning-face-with-tightly-closed-eyes-open-mouth.vue';

const IconGrinningFaceWithTightlyClosedEyesOpenMouth = Object.assign(_IconGrinningFaceWithTightlyClosedEyesOpenMouth, {
  install: (app: App) => {
    app.component(_IconGrinningFaceWithTightlyClosedEyesOpenMouth.name, _IconGrinningFaceWithTightlyClosedEyesOpenMouth);
  }
});

export default IconGrinningFaceWithTightlyClosedEyesOpenMouth;