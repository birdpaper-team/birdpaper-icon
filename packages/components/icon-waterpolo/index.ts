import type { App } from 'vue';
import _IconWaterpolo from './icon-waterpolo.vue';

const IconWaterpolo = Object.assign(_IconWaterpolo, {
  install: (app: App) => {
    app.component(_IconWaterpolo.name, _IconWaterpolo);
  }
});

export default IconWaterpolo;