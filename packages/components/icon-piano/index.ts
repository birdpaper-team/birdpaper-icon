import type { App } from 'vue';
import _IconPiano from './icon-piano.vue';

const IconPiano = Object.assign(_IconPiano, {
  install: (app: App) => {
    app.component(_IconPiano.name, _IconPiano);
  }
});

export default IconPiano;