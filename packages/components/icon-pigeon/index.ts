import type { App } from 'vue';
import _IconPigeon from './icon-pigeon.vue';

const IconPigeon = Object.assign(_IconPigeon, {
  install: (app: App) => {
    app.component(_IconPigeon.name, _IconPigeon);
  }
});

export default IconPigeon;