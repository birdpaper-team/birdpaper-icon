import type { App } from 'vue';
import _IconAperturePriority from './icon-aperture-priority.vue';

const IconAperturePriority = Object.assign(_IconAperturePriority, {
  install: (app: App) => {
    app.component(_IconAperturePriority.name, _IconAperturePriority);
  }
});

export default IconAperturePriority;