import type { App } from 'vue';
import _IconMedalLine from './icon-medal-line.vue';

const IconMedalLine = Object.assign(_IconMedalLine, {
  install: (app: App) => {
    app.component(_IconMedalLine.name, _IconMedalLine);
  }
});

export default IconMedalLine;