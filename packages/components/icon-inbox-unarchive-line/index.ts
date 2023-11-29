import type { App } from 'vue';
import _IconInboxUnarchiveLine from './icon-inbox-unarchive-line.vue';

const IconInboxUnarchiveLine = Object.assign(_IconInboxUnarchiveLine, {
  install: (app: App) => {
    app.component(_IconInboxUnarchiveLine.name, _IconInboxUnarchiveLine);
  }
});

export default IconInboxUnarchiveLine;