import type { App } from 'vue';
import _IconOceanengine from './icon-oceanengine.vue';

const IconOceanengine = Object.assign(_IconOceanengine, {
  install: (app: App) => {
    app.component(_IconOceanengine.name, _IconOceanengine);
  }
});

export default IconOceanengine;