import type { App } from 'vue';
import _IconPatreonLine from './icon-patreon-line.vue';

const IconPatreonLine = Object.assign(_IconPatreonLine, {
  install: (app: App) => {
    app.component(_IconPatreonLine.name, _IconPatreonLine);
  }
});

export default IconPatreonLine;