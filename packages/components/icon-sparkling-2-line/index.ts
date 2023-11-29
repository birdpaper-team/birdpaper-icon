import type { App } from 'vue';
import _IconSparkling2Line from './icon-sparkling-2-line.vue';

const IconSparkling2Line = Object.assign(_IconSparkling2Line, {
  install: (app: App) => {
    app.component(_IconSparkling2Line.name, _IconSparkling2Line);
  }
});

export default IconSparkling2Line;