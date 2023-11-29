import type { App } from 'vue';
import _IconEndpointRound from './icon-endpoint-round.vue';

const IconEndpointRound = Object.assign(_IconEndpointRound, {
  install: (app: App) => {
    app.component(_IconEndpointRound.name, _IconEndpointRound);
  }
});

export default IconEndpointRound;