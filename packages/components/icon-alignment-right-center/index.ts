import type { App } from 'vue';
import _IconAlignmentRightCenter from './icon-alignment-right-center.vue';

const IconAlignmentRightCenter = Object.assign(_IconAlignmentRightCenter, {
  install: (app: App) => {
    app.component(_IconAlignmentRightCenter.name, _IconAlignmentRightCenter);
  }
});

export default IconAlignmentRightCenter;