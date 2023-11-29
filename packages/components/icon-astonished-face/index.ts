import type { App } from 'vue';
import _IconAstonishedFace from './icon-astonished-face.vue';

const IconAstonishedFace = Object.assign(_IconAstonishedFace, {
  install: (app: App) => {
    app.component(_IconAstonishedFace.name, _IconAstonishedFace);
  }
});

export default IconAstonishedFace;