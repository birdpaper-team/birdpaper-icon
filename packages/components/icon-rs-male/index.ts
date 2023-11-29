import type { App } from 'vue';
import _IconRsMale from './icon-rs-male.vue';

const IconRsMale = Object.assign(_IconRsMale, {
  install: (app: App) => {
    app.component(_IconRsMale.name, _IconRsMale);
  }
});

export default IconRsMale;