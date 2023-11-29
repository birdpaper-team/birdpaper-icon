import type { App } from 'vue';
import _IconRedEnvelopes from './icon-red-envelopes.vue';

const IconRedEnvelopes = Object.assign(_IconRedEnvelopes, {
  install: (app: App) => {
    app.component(_IconRedEnvelopes.name, _IconRedEnvelopes);
  }
});

export default IconRedEnvelopes;