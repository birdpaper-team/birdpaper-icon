import type { App } from 'vue';
import _IconAlignmentHorizontalBottom from './icon-alignment-horizontal-bottom.vue';

const IconAlignmentHorizontalBottom = Object.assign(_IconAlignmentHorizontalBottom, {
  install: (app: App) => {
    app.component(_IconAlignmentHorizontalBottom.name, _IconAlignmentHorizontalBottom);
  }
});

export default IconAlignmentHorizontalBottom;