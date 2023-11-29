import type { App } from 'vue';
import _IconTrophyFill from './icon-trophy-fill.vue';

const IconTrophyFill = Object.assign(_IconTrophyFill, {
  install: (app: App) => {
    app.component(_IconTrophyFill.name, _IconTrophyFill);
  }
});

export default IconTrophyFill;