import type { App } from 'vue';
import _IconAlignmentBottomLeft from './icon-alignment-bottom-left.vue';

const IconAlignmentBottomLeft = Object.assign(_IconAlignmentBottomLeft, {
  install: (app: App) => {
    app.component(_IconAlignmentBottomLeft.name, _IconAlignmentBottomLeft);
  }
});

export default IconAlignmentBottomLeft;