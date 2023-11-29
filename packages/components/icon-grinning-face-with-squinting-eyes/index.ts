import type { App } from 'vue';
import _IconGrinningFaceWithSquintingEyes from './icon-grinning-face-with-squinting-eyes.vue';

const IconGrinningFaceWithSquintingEyes = Object.assign(_IconGrinningFaceWithSquintingEyes, {
  install: (app: App) => {
    app.component(_IconGrinningFaceWithSquintingEyes.name, _IconGrinningFaceWithSquintingEyes);
  }
});

export default IconGrinningFaceWithSquintingEyes;