import type { App } from 'vue';
import _IconShare2Line from './icon-share-2-line.vue';

const IconShare2Line = Object.assign(_IconShare2Line, {
  install: (app: App) => {
    app.component(_IconShare2Line.name, _IconShare2Line);
  }
});

export default IconShare2Line;