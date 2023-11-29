import type { App } from 'vue';
import _IconFacetime from './icon-facetime.vue';

const IconFacetime = Object.assign(_IconFacetime, {
  install: (app: App) => {
    app.component(_IconFacetime.name, _IconFacetime);
  }
});

export default IconFacetime;