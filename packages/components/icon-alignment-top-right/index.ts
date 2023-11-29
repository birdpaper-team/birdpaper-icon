import type { App } from 'vue';
import _IconAlignmentTopRight from './icon-alignment-top-right.vue';

const IconAlignmentTopRight = Object.assign(_IconAlignmentTopRight, {
  install: (app: App) => {
    app.component(_IconAlignmentTopRight.name, _IconAlignmentTopRight);
  }
});

export default IconAlignmentTopRight;