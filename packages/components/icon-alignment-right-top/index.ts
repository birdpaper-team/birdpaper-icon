import type { App } from 'vue';
import _IconAlignmentRightTop from './icon-alignment-right-top.vue';

const IconAlignmentRightTop = Object.assign(_IconAlignmentRightTop, {
  install: (app: App) => {
    app.component(_IconAlignmentRightTop.name, _IconAlignmentRightTop);
  }
});

export default IconAlignmentRightTop;