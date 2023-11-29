import type { App } from 'vue';
import _IconExternalLinkLine from './icon-external-link-line.vue';

const IconExternalLinkLine = Object.assign(_IconExternalLinkLine, {
  install: (app: App) => {
    app.component(_IconExternalLinkLine.name, _IconExternalLinkLine);
  }
});

export default IconExternalLinkLine;