import type { App } from 'vue';
import _IconVacuumCleaner from './icon-vacuum-cleaner.vue';

const IconVacuumCleaner = Object.assign(_IconVacuumCleaner, {
  install: (app: App) => {
    app.component(_IconVacuumCleaner.name, _IconVacuumCleaner);
  }
});

export default IconVacuumCleaner;