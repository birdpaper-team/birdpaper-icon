import type { App } from 'vue';
import _IconPpt from './icon-ppt.vue';

const IconPpt = Object.assign(_IconPpt, {
  install: (app: App) => {
    app.component(_IconPpt.name, _IconPpt);
  }
});

export default IconPpt;