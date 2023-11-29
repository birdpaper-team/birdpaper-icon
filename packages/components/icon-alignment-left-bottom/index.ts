import type { App } from 'vue';
import _IconAlignmentLeftBottom from './icon-alignment-left-bottom.vue';

const IconAlignmentLeftBottom = Object.assign(_IconAlignmentLeftBottom, {
  install: (app: App) => {
    app.component(_IconAlignmentLeftBottom.name, _IconAlignmentLeftBottom);
  }
});

export default IconAlignmentLeftBottom;