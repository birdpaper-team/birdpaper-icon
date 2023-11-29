import type { App } from 'vue';
import _IconKnifeFork from './icon-knife-fork.vue';

const IconKnifeFork = Object.assign(_IconKnifeFork, {
  install: (app: App) => {
    app.component(_IconKnifeFork.name, _IconKnifeFork);
  }
});

export default IconKnifeFork;