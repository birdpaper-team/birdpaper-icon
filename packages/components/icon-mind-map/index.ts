import type { App } from 'vue';
import _IconMindMap from './icon-mind-map.vue';

const IconMindMap = Object.assign(_IconMindMap, {
  install: (app: App) => {
    app.component(_IconMindMap.name, _IconMindMap);
  }
});

export default IconMindMap;