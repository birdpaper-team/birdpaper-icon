import type { App } from 'vue';
import _IconCornerUpLeftDoubleLine from './icon-corner-up-left-double-line.vue';

const IconCornerUpLeftDoubleLine = Object.assign(_IconCornerUpLeftDoubleLine, {
  install: (app: App) => {
    app.component(_IconCornerUpLeftDoubleLine.name, _IconCornerUpLeftDoubleLine);
  }
});

export default IconCornerUpLeftDoubleLine;