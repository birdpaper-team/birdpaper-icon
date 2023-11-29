import type { App } from 'vue';
import _IconSuitcase3Line from './icon-suitcase-3-line.vue';

const IconSuitcase3Line = Object.assign(_IconSuitcase3Line, {
  install: (app: App) => {
    app.component(_IconSuitcase3Line.name, _IconSuitcase3Line);
  }
});

export default IconSuitcase3Line;