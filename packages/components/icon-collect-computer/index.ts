import type { App } from 'vue';
import _IconCollectComputer from './icon-collect-computer.vue';

const IconCollectComputer = Object.assign(_IconCollectComputer, {
  install: (app: App) => {
    app.component(_IconCollectComputer.name, _IconCollectComputer);
  }
});

export default IconCollectComputer;