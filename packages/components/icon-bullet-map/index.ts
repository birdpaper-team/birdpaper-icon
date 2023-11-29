import type { App } from 'vue';
import _IconBulletMap from './icon-bullet-map.vue';

const IconBulletMap = Object.assign(_IconBulletMap, {
  install: (app: App) => {
    app.component(_IconBulletMap.name, _IconBulletMap);
  }
});

export default IconBulletMap;