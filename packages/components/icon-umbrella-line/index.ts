import type { App } from 'vue';
import _IconUmbrellaLine from './icon-umbrella-line.vue';

const IconUmbrellaLine = Object.assign(_IconUmbrellaLine, {
  install: (app: App) => {
    app.component(_IconUmbrellaLine.name, _IconUmbrellaLine);
  }
});

export default IconUmbrellaLine;