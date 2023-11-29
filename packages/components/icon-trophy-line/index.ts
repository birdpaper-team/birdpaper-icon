import type { App } from 'vue';
import _IconTrophyLine from './icon-trophy-line.vue';

const IconTrophyLine = Object.assign(_IconTrophyLine, {
  install: (app: App) => {
    app.component(_IconTrophyLine.name, _IconTrophyLine);
  }
});

export default IconTrophyLine;