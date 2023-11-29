import type { App } from 'vue';
import _IconChopsticksFork from './icon-chopsticks-fork.vue';

const IconChopsticksFork = Object.assign(_IconChopsticksFork, {
  install: (app: App) => {
    app.component(_IconChopsticksFork.name, _IconChopsticksFork);
  }
});

export default IconChopsticksFork;