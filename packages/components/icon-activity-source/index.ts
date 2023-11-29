import type { App } from 'vue';
import _IconActivitySource from './icon-activity-source.vue';

const IconActivitySource = Object.assign(_IconActivitySource, {
  install: (app: App) => {
    app.component(_IconActivitySource.name, _IconActivitySource);
  }
});

export default IconActivitySource;