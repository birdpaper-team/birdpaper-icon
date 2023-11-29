import type { App } from 'vue';
import _IconUterus from './icon-uterus.vue';

const IconUterus = Object.assign(_IconUterus, {
  install: (app: App) => {
    app.component(_IconUterus.name, _IconUterus);
  }
});

export default IconUterus;