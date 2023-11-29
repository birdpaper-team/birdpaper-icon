import type { App } from 'vue';
import _IconAlignmentHorizontalCenter from './icon-alignment-horizontal-center.vue';

const IconAlignmentHorizontalCenter = Object.assign(_IconAlignmentHorizontalCenter, {
  install: (app: App) => {
    app.component(_IconAlignmentHorizontalCenter.name, _IconAlignmentHorizontalCenter);
  }
});

export default IconAlignmentHorizontalCenter;