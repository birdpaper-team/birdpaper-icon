import type { App } from 'vue';
import _IconPrison from './icon-prison.vue';

const IconPrison = Object.assign(_IconPrison, {
  install: (app: App) => {
    app.component(_IconPrison.name, _IconPrison);
  }
});

export default IconPrison;