import type { App } from 'vue';
import _IconHandleRound from './icon-handle-round.vue';

const IconHandleRound = Object.assign(_IconHandleRound, {
  install: (app: App) => {
    app.component(_IconHandleRound.name, _IconHandleRound);
  }
});

export default IconHandleRound;