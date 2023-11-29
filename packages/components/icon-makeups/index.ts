import type { App } from 'vue';
import _IconMakeups from './icon-makeups.vue';

const IconMakeups = Object.assign(_IconMakeups, {
  install: (app: App) => {
    app.component(_IconMakeups.name, _IconMakeups);
  }
});

export default IconMakeups;