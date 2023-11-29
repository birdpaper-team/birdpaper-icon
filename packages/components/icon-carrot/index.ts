import type { App } from 'vue';
import _IconCarrot from './icon-carrot.vue';

const IconCarrot = Object.assign(_IconCarrot, {
  install: (app: App) => {
    app.component(_IconCarrot.name, _IconCarrot);
  }
});

export default IconCarrot;