import type { App } from 'vue';
import _IconDiscordLine from './icon-discord-line.vue';

const IconDiscordLine = Object.assign(_IconDiscordLine, {
  install: (app: App) => {
    app.component(_IconDiscordLine.name, _IconDiscordLine);
  }
});

export default IconDiscordLine;