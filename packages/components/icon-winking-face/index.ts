import type { App } from 'vue';
import _IconWinkingFace from './icon-winking-face.vue';

const IconWinkingFace = Object.assign(_IconWinkingFace, {
  install: (app: App) => {
    app.component(_IconWinkingFace.name, _IconWinkingFace);
  }
});

export default IconWinkingFace;