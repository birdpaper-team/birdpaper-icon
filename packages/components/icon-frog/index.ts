import type { App } from 'vue';
import _IconFrog from './icon-frog.vue';

const IconFrog = Object.assign(_IconFrog, {
  install: (app: App) => {
    app.component(_IconFrog.name, _IconFrog);
  }
});

export default IconFrog;