import type { App } from 'vue';
import _IconSteamFill from './icon-steam-fill.vue';

const IconSteamFill = Object.assign(_IconSteamFill, {
  install: (app: App) => {
    app.component(_IconSteamFill.name, _IconSteamFill);
  }
});

export default IconSteamFill;