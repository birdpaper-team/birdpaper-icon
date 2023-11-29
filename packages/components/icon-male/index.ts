import type { App } from 'vue';
import _IconMale from './icon-male.vue';

const IconMale = Object.assign(_IconMale, {
  install: (app: App) => {
    app.component(_IconMale.name, _IconMale);
  }
});

export default IconMale;