import type { App } from 'vue';
import _IconMaslowPyramids from './icon-maslow-pyramids.vue';

const IconMaslowPyramids = Object.assign(_IconMaslowPyramids, {
  install: (app: App) => {
    app.component(_IconMaslowPyramids.name, _IconMaslowPyramids);
  }
});

export default IconMaslowPyramids;