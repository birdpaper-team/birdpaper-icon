import type { App } from 'vue';
import _IconDiscordFill from './icon-discord-fill.vue';

const IconDiscordFill = Object.assign(_IconDiscordFill, {
  install: (app: App) => {
    app.component(_IconDiscordFill.name, _IconDiscordFill);
  }
});

export default IconDiscordFill;