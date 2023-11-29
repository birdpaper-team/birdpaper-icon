import type { App } from 'vue';
import _IconPeriod from './icon-period.vue';

const IconPeriod = Object.assign(_IconPeriod, {
  install: (app: App) => {
    app.component(_IconPeriod.name, _IconPeriod);
  }
});

export default IconPeriod;