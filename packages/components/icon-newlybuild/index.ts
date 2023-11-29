import type { App } from 'vue';
import _IconNewlybuild from './icon-newlybuild.vue';

const IconNewlybuild = Object.assign(_IconNewlybuild, {
  install: (app: App) => {
    app.component(_IconNewlybuild.name, _IconNewlybuild);
  }
});

export default IconNewlybuild;