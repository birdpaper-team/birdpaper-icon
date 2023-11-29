import type { App } from 'vue';
import _IconScoreboard from './icon-scoreboard.vue';

const IconScoreboard = Object.assign(_IconScoreboard, {
  install: (app: App) => {
    app.component(_IconScoreboard.name, _IconScoreboard);
  }
});

export default IconScoreboard;