import type { App } from 'vue';
import _IconWaterfallsV from './icon-waterfalls-v.vue';

const IconWaterfallsV = Object.assign(_IconWaterfallsV, {
  install: (app: App) => {
    app.component(_IconWaterfallsV.name, _IconWaterfallsV);
  }
});

export default IconWaterfallsV;