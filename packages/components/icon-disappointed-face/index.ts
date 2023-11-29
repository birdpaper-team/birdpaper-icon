import type { App } from 'vue';
import _IconDisappointedFace from './icon-disappointed-face.vue';

const IconDisappointedFace = Object.assign(_IconDisappointedFace, {
  install: (app: App) => {
    app.component(_IconDisappointedFace.name, _IconDisappointedFace);
  }
});

export default IconDisappointedFace;