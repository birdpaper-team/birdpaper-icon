import type { App } from 'vue';
import _IconWarehousing from './icon-warehousing.vue';

const IconWarehousing = Object.assign(_IconWarehousing, {
  install: (app: App) => {
    app.component(_IconWarehousing.name, _IconWarehousing);
  }
});

export default IconWarehousing;