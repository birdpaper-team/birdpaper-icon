import type { App } from 'vue';
import _IconVidiconFill from './icon-vidicon-fill.vue';

const IconVidiconFill = Object.assign(_IconVidiconFill, {
  install: (app: App) => {
    app.component(_IconVidiconFill.name, _IconVidiconFill);
  }
});

export default IconVidiconFill;