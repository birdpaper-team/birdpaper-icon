import type { App } from 'vue';
import _IconBye from './icon-bye.vue';

const IconBye = Object.assign(_IconBye, {
  install: (app: App) => {
    app.component(_IconBye.name, _IconBye);
  }
});

export default IconBye;