import type { App } from 'vue';
import _IconTakeawayLine from './icon-takeaway-line.vue';

const IconTakeawayLine = Object.assign(_IconTakeawayLine, {
  install: (app: App) => {
    app.component(_IconTakeawayLine.name, _IconTakeawayLine);
  }
});

export default IconTakeawayLine;