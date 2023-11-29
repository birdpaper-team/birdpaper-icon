import type { App } from 'vue';
import _IconNodeRound from './icon-node-round.vue';

const IconNodeRound = Object.assign(_IconNodeRound, {
  install: (app: App) => {
    app.component(_IconNodeRound.name, _IconNodeRound);
  }
});

export default IconNodeRound;