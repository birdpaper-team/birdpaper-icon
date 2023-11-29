import type { App } from 'vue';
import _IconDistraughtFace from './icon-distraught-face.vue';

const IconDistraughtFace = Object.assign(_IconDistraughtFace, {
  install: (app: App) => {
    app.component(_IconDistraughtFace.name, _IconDistraughtFace);
  }
});

export default IconDistraughtFace;