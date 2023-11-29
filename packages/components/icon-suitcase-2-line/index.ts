import type { App } from 'vue';
import _IconSuitcase2Line from './icon-suitcase-2-line.vue';

const IconSuitcase2Line = Object.assign(_IconSuitcase2Line, {
  install: (app: App) => {
    app.component(_IconSuitcase2Line.name, _IconSuitcase2Line);
  }
});

export default IconSuitcase2Line;