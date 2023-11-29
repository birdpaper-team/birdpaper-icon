import type { App } from 'vue';
import _IconPangle from './icon-pangle.vue';

const IconPangle = Object.assign(_IconPangle, {
  install: (app: App) => {
    app.component(_IconPangle.name, _IconPangle);
  }
});

export default IconPangle;