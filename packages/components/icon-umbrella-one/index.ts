import type { App } from 'vue';
import _IconUmbrellaOne from './icon-umbrella-one.vue';

const IconUmbrellaOne = Object.assign(_IconUmbrellaOne, {
  install: (app: App) => {
    app.component(_IconUmbrellaOne.name, _IconUmbrellaOne);
  }
});

export default IconUmbrellaOne;