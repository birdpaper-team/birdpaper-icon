import type { App } from 'vue';
import _IconSlashCommands from './icon-slash-commands.vue';

const IconSlashCommands = Object.assign(_IconSlashCommands, {
  install: (app: App) => {
    app.component(_IconSlashCommands.name, _IconSlashCommands);
  }
});

export default IconSlashCommands;