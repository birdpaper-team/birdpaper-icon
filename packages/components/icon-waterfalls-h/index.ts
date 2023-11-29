import type { App } from 'vue';
import _IconWaterfallsH from './icon-waterfalls-h.vue';

const IconWaterfallsH = Object.assign(_IconWaterfallsH, {
  install: (app: App) => {
    app.component(_IconWaterfallsH.name, _IconWaterfallsH);
  }
});

export default IconWaterfallsH;