import type { App } from 'vue';
import _IconUserShared2Line from './icon-user-shared-2-line.vue';

const IconUserShared2Line = Object.assign(_IconUserShared2Line, {
  install: (app: App) => {
    app.component(_IconUserShared2Line.name, _IconUserShared2Line);
  }
});

export default IconUserShared2Line;