import type { App } from 'vue';
import _IconGhost from './icon-ghost.vue';

const IconGhost = Object.assign(_IconGhost, {
  install: (app: App) => {
    app.component(_IconGhost.name, _IconGhost);
  }
});

export default IconGhost;