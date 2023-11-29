import type { App } from 'vue';
import _IconSmilingFace from './icon-smiling-face.vue';

const IconSmilingFace = Object.assign(_IconSmilingFace, {
  install: (app: App) => {
    app.component(_IconSmilingFace.name, _IconSmilingFace);
  }
});

export default IconSmilingFace;