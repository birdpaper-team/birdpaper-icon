import type { App } from 'vue';
import _IconTwitchLine from './icon-twitch-line.vue';

const IconTwitchLine = Object.assign(_IconTwitchLine, {
  install: (app: App) => {
    app.component(_IconTwitchLine.name, _IconTwitchLine);
  }
});

export default IconTwitchLine;