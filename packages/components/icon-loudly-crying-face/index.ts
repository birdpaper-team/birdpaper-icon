import type { App } from 'vue';
import _IconLoudlyCryingFace from './icon-loudly-crying-face.vue';

const IconLoudlyCryingFace = Object.assign(_IconLoudlyCryingFace, {
  install: (app: App) => {
    app.component(_IconLoudlyCryingFace.name, _IconLoudlyCryingFace);
  }
});

export default IconLoudlyCryingFace;