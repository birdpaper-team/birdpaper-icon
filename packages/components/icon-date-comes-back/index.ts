import type { App } from 'vue';
import _IconDateComesBack from './icon-date-comes-back.vue';

const IconDateComesBack = Object.assign(_IconDateComesBack, {
  install: (app: App) => {
    app.component(_IconDateComesBack.name, _IconDateComesBack);
  }
});

export default IconDateComesBack;