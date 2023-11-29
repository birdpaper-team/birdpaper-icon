import type { App } from 'vue';
import _IconChildWithPacifier from './icon-child-with-pacifier.vue';

const IconChildWithPacifier = Object.assign(_IconChildWithPacifier, {
  install: (app: App) => {
    app.component(_IconChildWithPacifier.name, _IconChildWithPacifier);
  }
});

export default IconChildWithPacifier;