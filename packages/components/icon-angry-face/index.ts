import type { App } from 'vue';
import _IconAngryFace from './icon-angry-face.vue';

const IconAngryFace = Object.assign(_IconAngryFace, {
  install: (app: App) => {
    app.component(_IconAngryFace.name, _IconAngryFace);
  }
});

export default IconAngryFace;