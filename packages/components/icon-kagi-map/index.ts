import type { App } from 'vue';
import _IconKagiMap from './icon-kagi-map.vue';

const IconKagiMap = Object.assign(_IconKagiMap, {
  install: (app: App) => {
    app.component(_IconKagiMap.name, _IconKagiMap);
  }
});

export default IconKagiMap;