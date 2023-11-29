import type { App } from 'vue';
import _IconInboxArchiveLine from './icon-inbox-archive-line.vue';

const IconInboxArchiveLine = Object.assign(_IconInboxArchiveLine, {
  install: (app: App) => {
    app.component(_IconInboxArchiveLine.name, _IconInboxArchiveLine);
  }
});

export default IconInboxArchiveLine;