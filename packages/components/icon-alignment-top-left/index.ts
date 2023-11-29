import type { App } from 'vue';
import _IconAlignmentTopLeft from './icon-alignment-top-left.vue';

const IconAlignmentTopLeft = Object.assign(_IconAlignmentTopLeft, {
  install: (app: App) => {
    app.component(_IconAlignmentTopLeft.name, _IconAlignmentTopLeft);
  }
});

export default IconAlignmentTopLeft;