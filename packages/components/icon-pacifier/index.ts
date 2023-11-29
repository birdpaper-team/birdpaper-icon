import type { App } from 'vue';
import _IconPacifier from './icon-pacifier.vue';

const IconPacifier = Object.assign(_IconPacifier, {
  install: (app: App) => {
    app.component(_IconPacifier.name, _IconPacifier);
  }
});

export default IconPacifier;