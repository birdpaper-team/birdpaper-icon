import type { App } from 'vue';
import _IconEnvelope from './icon-envelope.vue';

const IconEnvelope = Object.assign(_IconEnvelope, {
  install: (app: App) => {
    app.component(_IconEnvelope.name, _IconEnvelope);
  }
});

export default IconEnvelope;