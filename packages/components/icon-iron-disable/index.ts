import type { App } from 'vue';
import _IconIronDisable from './icon-iron-disable.vue';

const IconIronDisable = Object.assign(_IconIronDisable, {
  install: (app: App) => {
    app.component(_IconIronDisable.name, _IconIronDisable);
  }
});

export default IconIronDisable;