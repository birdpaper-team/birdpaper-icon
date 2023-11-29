import type { App } from 'vue';
import _IconConceptSharing from './icon-concept-sharing.vue';

const IconConceptSharing = Object.assign(_IconConceptSharing, {
  install: (app: App) => {
    app.component(_IconConceptSharing.name, _IconConceptSharing);
  }
});

export default IconConceptSharing;