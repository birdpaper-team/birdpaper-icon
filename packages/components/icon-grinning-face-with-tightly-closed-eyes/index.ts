import type { App } from 'vue';
import _IconGrinningFaceWithTightlyClosedEyes from './icon-grinning-face-with-tightly-closed-eyes.vue';

const IconGrinningFaceWithTightlyClosedEyes = Object.assign(_IconGrinningFaceWithTightlyClosedEyes, {
  install: (app: App) => {
    app.component(_IconGrinningFaceWithTightlyClosedEyes.name, _IconGrinningFaceWithTightlyClosedEyes);
  }
});

export default IconGrinningFaceWithTightlyClosedEyes;