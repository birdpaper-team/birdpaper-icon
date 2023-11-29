import type { App } from 'vue';
import _IconVidiconLine from './icon-vidicon-line.vue';

const IconVidiconLine = Object.assign(_IconVidiconLine, {
  install: (app: App) => {
    app.component(_IconVidiconLine.name, _IconVidiconLine);
  }
});

export default IconVidiconLine;