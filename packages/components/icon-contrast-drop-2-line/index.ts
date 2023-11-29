import type { App } from 'vue';
import _IconContrastDrop2Line from './icon-contrast-drop-2-line.vue';

const IconContrastDrop2Line = Object.assign(_IconContrastDrop2Line, {
  install: (app: App) => {
    app.component(_IconContrastDrop2Line.name, _IconContrastDrop2Line);
  }
});

export default IconContrastDrop2Line;