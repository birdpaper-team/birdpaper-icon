import type { App } from 'vue';
import _IconCornerLeftUpLine from './icon-corner-left-up-line.vue';

const IconCornerLeftUpLine = Object.assign(_IconCornerLeftUpLine, {
  install: (app: App) => {
    app.component(_IconCornerLeftUpLine.name, _IconCornerLeftUpLine);
  }
});

export default IconCornerLeftUpLine;