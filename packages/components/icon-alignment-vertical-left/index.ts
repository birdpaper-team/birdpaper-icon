import type { App } from 'vue';
import _IconAlignmentVerticalLeft from './icon-alignment-vertical-left.vue';

const IconAlignmentVerticalLeft = Object.assign(_IconAlignmentVerticalLeft, {
  install: (app: App) => {
    app.component(_IconAlignmentVerticalLeft.name, _IconAlignmentVerticalLeft);
  }
});

export default IconAlignmentVerticalLeft;