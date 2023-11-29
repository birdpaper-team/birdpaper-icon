import type { App } from 'vue';
import _IconFootballLine from './icon-football-line.vue';

const IconFootballLine = Object.assign(_IconFootballLine, {
  install: (app: App) => {
    app.component(_IconFootballLine.name, _IconFootballLine);
  }
});

export default IconFootballLine;