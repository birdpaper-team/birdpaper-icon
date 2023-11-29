import type { App } from 'vue';
import _IconAnchorRound from './icon-anchor-round.vue';

const IconAnchorRound = Object.assign(_IconAnchorRound, {
  install: (app: App) => {
    app.component(_IconAnchorRound.name, _IconAnchorRound);
  }
});

export default IconAnchorRound;