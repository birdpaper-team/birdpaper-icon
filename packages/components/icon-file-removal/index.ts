import type { App } from 'vue';
import _IconFileRemoval from './icon-file-removal.vue';

const IconFileRemoval = Object.assign(_IconFileRemoval, {
  install: (app: App) => {
    app.component(_IconFileRemoval.name, _IconFileRemoval);
  }
});

export default IconFileRemoval;