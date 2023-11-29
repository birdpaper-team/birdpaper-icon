import type { App } from 'vue';
import _IconNewLark from './icon-new-lark.vue';

const IconNewLark = Object.assign(_IconNewLark, {
  install: (app: App) => {
    app.component(_IconNewLark.name, _IconNewLark);
  }
});

export default IconNewLark;