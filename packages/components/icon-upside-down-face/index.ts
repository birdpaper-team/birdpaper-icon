import type { App } from 'vue';
import _IconUpsideDownFace from './icon-upside-down-face.vue';

const IconUpsideDownFace = Object.assign(_IconUpsideDownFace, {
  install: (app: App) => {
    app.component(_IconUpsideDownFace.name, _IconUpsideDownFace);
  }
});

export default IconUpsideDownFace;