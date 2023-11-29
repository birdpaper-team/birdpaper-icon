import type { App } from 'vue';
import _IconFaceu from './icon-faceu.vue';

const IconFaceu = Object.assign(_IconFaceu, {
  install: (app: App) => {
    app.component(_IconFaceu.name, _IconFaceu);
  }
});

export default IconFaceu;