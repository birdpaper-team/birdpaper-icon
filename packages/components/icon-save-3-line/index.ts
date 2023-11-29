import type { App } from 'vue';
import _IconSave3Line from './icon-save-3-line.vue';

const IconSave3Line = Object.assign(_IconSave3Line, {
  install: (app: App) => {
    app.component(_IconSave3Line.name, _IconSave3Line);
  }
});

export default IconSave3Line;