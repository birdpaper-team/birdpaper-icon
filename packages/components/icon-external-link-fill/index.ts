import type { App } from 'vue';
import _IconExternalLinkFill from './icon-external-link-fill.vue';

const IconExternalLinkFill = Object.assign(_IconExternalLinkFill, {
  install: (app: App) => {
    app.component(_IconExternalLinkFill.name, _IconExternalLinkFill);
  }
});

export default IconExternalLinkFill;