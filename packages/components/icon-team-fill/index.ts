import type { App } from 'vue';
import _IconTeamFill from './icon-team-fill.vue';

const IconTeamFill = Object.assign(_IconTeamFill, {
  install: (app: App) => {
    app.component(_IconTeamFill.name, _IconTeamFill);
  }
});

export default IconTeamFill;