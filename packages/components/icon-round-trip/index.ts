import type { App } from 'vue';
import _IconRoundTrip from './icon-round-trip.vue';

const IconRoundTrip = Object.assign(_IconRoundTrip, {
  install: (app: App) => {
    app.component(_IconRoundTrip.name, _IconRoundTrip);
  }
});

export default IconRoundTrip;