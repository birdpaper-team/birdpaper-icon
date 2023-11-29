import type { App } from 'vue';
import _IconReplayFive from './icon-replay-five.vue';

const IconReplayFive = Object.assign(_IconReplayFive, {
  install: (app: App) => {
    app.component(_IconReplayFive.name, _IconReplayFive);
  }
});

export default IconReplayFive;