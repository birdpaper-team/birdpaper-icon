import type { App } from 'vue';
import _IconPatreonFill from './icon-patreon-fill.vue';

const IconPatreonFill = Object.assign(_IconPatreonFill, {
  install: (app: App) => {
    app.component(_IconPatreonFill.name, _IconPatreonFill);
  }
});

export default IconPatreonFill;