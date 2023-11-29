import type { App } from 'vue';
import _IconFaceWithSmilingOpenEyes from './icon-face-with-smiling-open-eyes.vue';

const IconFaceWithSmilingOpenEyes = Object.assign(_IconFaceWithSmilingOpenEyes, {
  install: (app: App) => {
    app.component(_IconFaceWithSmilingOpenEyes.name, _IconFaceWithSmilingOpenEyes);
  }
});

export default IconFaceWithSmilingOpenEyes;