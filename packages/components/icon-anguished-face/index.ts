import type { App } from 'vue';
import _IconAnguishedFace from './icon-anguished-face.vue';

const IconAnguishedFace = Object.assign(_IconAnguishedFace, {
  install: (app: App) => {
    app.component(_IconAnguishedFace.name, _IconAnguishedFace);
  }
});

export default IconAnguishedFace;