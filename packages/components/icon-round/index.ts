import type { App } from 'vue';
import _IconRound from './icon-round.vue';

const IconRound = Object.assign(_IconRound, {
  install: (app: App) => {
    app.component(_IconRound.name, _IconRound);
  }
});

export default IconRound;