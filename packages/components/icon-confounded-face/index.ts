import type { App } from 'vue';
import _IconConfoundedFace from './icon-confounded-face.vue';

const IconConfoundedFace = Object.assign(_IconConfoundedFace, {
  install: (app: App) => {
    app.component(_IconConfoundedFace.name, _IconConfoundedFace);
  }
});

export default IconConfoundedFace;