import type { App } from 'vue';
import _IconHealth from './icon-health.vue';

const IconHealth = Object.assign(_IconHealth, {
  install: (app: App) => {
    app.component(_IconHealth.name, _IconHealth);
  }
});

export default IconHealth;