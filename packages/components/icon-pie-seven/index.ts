import type { App } from 'vue';
import _IconPieSeven from './icon-pie-seven.vue';

const IconPieSeven = Object.assign(_IconPieSeven, {
  install: (app: App) => {
    app.component(_IconPieSeven.name, _IconPieSeven);
  }
});

export default IconPieSeven;