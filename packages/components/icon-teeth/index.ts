import type { App } from 'vue';
import _IconTeeth from './icon-teeth.vue';

const IconTeeth = Object.assign(_IconTeeth, {
  install: (app: App) => {
    app.component(_IconTeeth.name, _IconTeeth);
  }
});

export default IconTeeth;