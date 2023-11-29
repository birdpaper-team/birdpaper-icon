import type { App } from 'vue';
import _IconWomenFill from './icon-women-fill.vue';

const IconWomenFill = Object.assign(_IconWomenFill, {
  install: (app: App) => {
    app.component(_IconWomenFill.name, _IconWomenFill);
  }
});

export default IconWomenFill;