import type { App } from 'vue';
import _IconSave2Line from './icon-save-2-line.vue';

const IconSave2Line = Object.assign(_IconSave2Line, {
  install: (app: App) => {
    app.component(_IconSave2Line.name, _IconSave2Line);
  }
});

export default IconSave2Line;