import type { App } from 'vue';
import _IconClapperboardFill from './icon-clapperboard-fill.vue';

const IconClapperboardFill = Object.assign(_IconClapperboardFill, {
  install: (app: App) => {
    app.component(_IconClapperboardFill.name, _IconClapperboardFill);
  }
});

export default IconClapperboardFill;