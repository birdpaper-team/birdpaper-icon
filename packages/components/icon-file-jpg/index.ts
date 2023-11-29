import type { App } from 'vue';
import _IconFileJpg from './icon-file-jpg.vue';

const IconFileJpg = Object.assign(_IconFileJpg, {
  install: (app: App) => {
    app.component(_IconFileJpg.name, _IconFileJpg);
  }
});

export default IconFileJpg;