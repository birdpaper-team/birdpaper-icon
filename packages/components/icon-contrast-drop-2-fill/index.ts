import type { App } from 'vue';
import _IconContrastDrop2Fill from './icon-contrast-drop-2-fill.vue';

const IconContrastDrop2Fill = Object.assign(_IconContrastDrop2Fill, {
  install: (app: App) => {
    app.component(_IconContrastDrop2Fill.name, _IconContrastDrop2Fill);
  }
});

export default IconContrastDrop2Fill;