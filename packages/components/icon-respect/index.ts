import type { App } from 'vue';
import _IconRespect from './icon-respect.vue';

const IconRespect = Object.assign(_IconRespect, {
  install: (app: App) => {
    app.component(_IconRespect.name, _IconRespect);
  }
});

export default IconRespect;