import type { App } from 'vue';
import _IconNewEfferent from './icon-new-efferent.vue';

const IconNewEfferent = Object.assign(_IconNewEfferent, {
  install: (app: App) => {
    app.component(_IconNewEfferent.name, _IconNewEfferent);
  }
});

export default IconNewEfferent;