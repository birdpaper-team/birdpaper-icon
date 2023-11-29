import type { App } from 'vue';
import _IconCornerUpRightDoubleLine from './icon-corner-up-right-double-line.vue';

const IconCornerUpRightDoubleLine = Object.assign(_IconCornerUpRightDoubleLine, {
  install: (app: App) => {
    app.component(_IconCornerUpRightDoubleLine.name, _IconCornerUpRightDoubleLine);
  }
});

export default IconCornerUpRightDoubleLine;