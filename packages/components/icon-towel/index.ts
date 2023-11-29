import type { App } from 'vue';
import _IconTowel from './icon-towel.vue';

const IconTowel = Object.assign(_IconTowel, {
  install: (app: App) => {
    app.component(_IconTowel.name, _IconTowel);
  }
});

export default IconTowel;