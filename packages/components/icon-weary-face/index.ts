import type { App } from 'vue';
import _IconWearyFace from './icon-weary-face.vue';

const IconWearyFace = Object.assign(_IconWearyFace, {
  install: (app: App) => {
    app.component(_IconWearyFace.name, _IconWearyFace);
  }
});

export default IconWearyFace;