import type { App } from 'vue';
import _IconTeamLine from './icon-team-line.vue';

const IconTeamLine = Object.assign(_IconTeamLine, {
  install: (app: App) => {
    app.component(_IconTeamLine.name, _IconTeamLine);
  }
});

export default IconTeamLine;