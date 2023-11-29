import type { App } from 'vue';
import _IconConfusedFace from './icon-confused-face.vue';

const IconConfusedFace = Object.assign(_IconConfusedFace, {
  install: (app: App) => {
    app.component(_IconConfusedFace.name, _IconConfusedFace);
  }
});

export default IconConfusedFace;