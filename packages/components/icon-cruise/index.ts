import type { App } from 'vue';
import _IconCruise from './icon-cruise.vue';

const IconCruise = Object.assign(_IconCruise, {
  install: (app: App) => {
    app.component(_IconCruise.name, _IconCruise);
  }
});

export default IconCruise;