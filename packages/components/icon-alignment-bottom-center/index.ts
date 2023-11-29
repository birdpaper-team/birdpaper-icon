import type { App } from 'vue';
import _IconAlignmentBottomCenter from './icon-alignment-bottom-center.vue';

const IconAlignmentBottomCenter = Object.assign(_IconAlignmentBottomCenter, {
  install: (app: App) => {
    app.component(_IconAlignmentBottomCenter.name, _IconAlignmentBottomCenter);
  }
});

export default IconAlignmentBottomCenter;