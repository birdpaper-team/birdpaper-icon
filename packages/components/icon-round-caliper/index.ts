import type { App } from 'vue';
import _IconRoundCaliper from './icon-round-caliper.vue';

const IconRoundCaliper = Object.assign(_IconRoundCaliper, {
  install: (app: App) => {
    app.component(_IconRoundCaliper.name, _IconRoundCaliper);
  }
});

export default IconRoundCaliper;