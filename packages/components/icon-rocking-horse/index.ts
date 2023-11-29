import type { App } from 'vue';
import _IconRockingHorse from './icon-rocking-horse.vue';

const IconRockingHorse = Object.assign(_IconRockingHorse, {
  install: (app: App) => {
    app.component(_IconRockingHorse.name, _IconRockingHorse);
  }
});

export default IconRockingHorse;