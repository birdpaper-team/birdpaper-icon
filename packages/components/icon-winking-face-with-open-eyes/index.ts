import type { App } from 'vue';
import _IconWinkingFaceWithOpenEyes from './icon-winking-face-with-open-eyes.vue';

const IconWinkingFaceWithOpenEyes = Object.assign(_IconWinkingFaceWithOpenEyes, {
  install: (app: App) => {
    app.component(_IconWinkingFaceWithOpenEyes.name, _IconWinkingFaceWithOpenEyes);
  }
});

export default IconWinkingFaceWithOpenEyes;