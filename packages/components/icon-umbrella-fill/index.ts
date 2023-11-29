import type { App } from 'vue';
import _IconUmbrellaFill from './icon-umbrella-fill.vue';

const IconUmbrellaFill = Object.assign(_IconUmbrellaFill, {
  install: (app: App) => {
    app.component(_IconUmbrellaFill.name, _IconUmbrellaFill);
  }
});

export default IconUmbrellaFill;