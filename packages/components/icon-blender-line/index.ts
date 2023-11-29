import type { App } from 'vue';
import _IconBlenderLine from './icon-blender-line.vue';

const IconBlenderLine = Object.assign(_IconBlenderLine, {
  install: (app: App) => {
    app.component(_IconBlenderLine.name, _IconBlenderLine);
  }
});

export default IconBlenderLine;