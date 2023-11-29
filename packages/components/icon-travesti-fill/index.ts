import type { App } from 'vue';
import _IconTravestiFill from './icon-travesti-fill.vue';

const IconTravestiFill = Object.assign(_IconTravestiFill, {
  install: (app: App) => {
    app.component(_IconTravestiFill.name, _IconTravestiFill);
  }
});

export default IconTravestiFill;