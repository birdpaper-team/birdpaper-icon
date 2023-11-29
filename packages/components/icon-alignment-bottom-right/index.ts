import type { App } from 'vue';
import _IconAlignmentBottomRight from './icon-alignment-bottom-right.vue';

const IconAlignmentBottomRight = Object.assign(_IconAlignmentBottomRight, {
  install: (app: App) => {
    app.component(_IconAlignmentBottomRight.name, _IconAlignmentBottomRight);
  }
});

export default IconAlignmentBottomRight;