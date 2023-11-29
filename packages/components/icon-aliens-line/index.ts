import type { App } from 'vue';
import _IconAliensLine from './icon-aliens-line.vue';

const IconAliensLine = Object.assign(_IconAliensLine, {
  install: (app: App) => {
    app.component(_IconAliensLine.name, _IconAliensLine);
  }
});

export default IconAliensLine;