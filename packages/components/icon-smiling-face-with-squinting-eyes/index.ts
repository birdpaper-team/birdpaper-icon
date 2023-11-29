import type { App } from 'vue';
import _IconSmilingFaceWithSquintingEyes from './icon-smiling-face-with-squinting-eyes.vue';

const IconSmilingFaceWithSquintingEyes = Object.assign(_IconSmilingFaceWithSquintingEyes, {
  install: (app: App) => {
    app.component(_IconSmilingFaceWithSquintingEyes.name, _IconSmilingFaceWithSquintingEyes);
  }
});

export default IconSmilingFaceWithSquintingEyes;