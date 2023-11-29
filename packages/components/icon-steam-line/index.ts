import type { App } from 'vue';
import _IconSteamLine from './icon-steam-line.vue';

const IconSteamLine = Object.assign(_IconSteamLine, {
  install: (app: App) => {
    app.component(_IconSteamLine.name, _IconSteamLine);
  }
});

export default IconSteamLine;