import type { App } from 'vue';
import _IconSlashCommands2 from './icon-slash-commands-2.vue';

const IconSlashCommands2 = Object.assign(_IconSlashCommands2, {
  install: (app: App) => {
    app.component(_IconSlashCommands2.name, _IconSlashCommands2);
  }
});

export default IconSlashCommands2;