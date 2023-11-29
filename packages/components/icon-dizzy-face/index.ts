import type { App } from 'vue';
import _IconDizzyFace from './icon-dizzy-face.vue';

const IconDizzyFace = Object.assign(_IconDizzyFace, {
  install: (app: App) => {
    app.component(_IconDizzyFace.name, _IconDizzyFace);
  }
});

export default IconDizzyFace;