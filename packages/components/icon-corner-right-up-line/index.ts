import type { App } from 'vue';
import _IconCornerRightUpLine from './icon-corner-right-up-line.vue';

const IconCornerRightUpLine = Object.assign(_IconCornerRightUpLine, {
  install: (app: App) => {
    app.component(_IconCornerRightUpLine.name, _IconCornerRightUpLine);
  }
});

export default IconCornerRightUpLine;