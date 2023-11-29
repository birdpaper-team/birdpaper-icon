import type { App } from 'vue';
import _IconPoutingFace from './icon-pouting-face.vue';

const IconPoutingFace = Object.assign(_IconPoutingFace, {
  install: (app: App) => {
    app.component(_IconPoutingFace.name, _IconPoutingFace);
  }
});

export default IconPoutingFace;