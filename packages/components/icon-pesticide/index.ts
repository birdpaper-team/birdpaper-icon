import type { App } from 'vue';
import _IconPesticide from './icon-pesticide.vue';

const IconPesticide = Object.assign(_IconPesticide, {
  install: (app: App) => {
    app.component(_IconPesticide.name, _IconPesticide);
  }
});

export default IconPesticide;