import type { App } from 'vue';
import _IconAreaMap from './icon-area-map.vue';

const IconAreaMap = Object.assign(_IconAreaMap, {
  install: (app: App) => {
    app.component(_IconAreaMap.name, _IconAreaMap);
  }
});

export default IconAreaMap;