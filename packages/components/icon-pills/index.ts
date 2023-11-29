import type { App } from 'vue';
import _IconPills from './icon-pills.vue';

const IconPills = Object.assign(_IconPills, {
  install: (app: App) => {
    app.component(_IconPills.name, _IconPills);
  }
});

export default IconPills;