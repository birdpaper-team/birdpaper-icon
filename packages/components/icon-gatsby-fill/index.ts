import type { App } from 'vue';
import _IconGatsbyFill from './icon-gatsby-fill.vue';

const IconGatsbyFill = Object.assign(_IconGatsbyFill, {
  install: (app: App) => {
    app.component(_IconGatsbyFill.name, _IconGatsbyFill);
  }
});

export default IconGatsbyFill;