import type { App } from 'vue';
import _IconAlignmentVerticalRight from './icon-alignment-vertical-right.vue';

const IconAlignmentVerticalRight = Object.assign(_IconAlignmentVerticalRight, {
  install: (app: App) => {
    app.component(_IconAlignmentVerticalRight.name, _IconAlignmentVerticalRight);
  }
});

export default IconAlignmentVerticalRight;