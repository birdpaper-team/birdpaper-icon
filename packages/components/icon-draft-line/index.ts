import type { App } from 'vue';
import _IconDraftLine from './icon-draft-line.vue';

const IconDraftLine = Object.assign(_IconDraftLine, {
  install: (app: App) => {
    app.component(_IconDraftLine.name, _IconDraftLine);
  }
});

export default IconDraftLine;