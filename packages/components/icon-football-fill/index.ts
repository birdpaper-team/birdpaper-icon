import type { App } from 'vue';
import _IconFootballFill from './icon-football-fill.vue';

const IconFootballFill = Object.assign(_IconFootballFill, {
  install: (app: App) => {
    app.component(_IconFootballFill.name, _IconFootballFill);
  }
});

export default IconFootballFill;