import type { App } from 'vue';
import _IconAfferent from './icon-afferent.vue';

const IconAfferent = Object.assign(_IconAfferent, {
  install: (app: App) => {
    app.component(_IconAfferent.name, _IconAfferent);
  }
});

export default IconAfferent;