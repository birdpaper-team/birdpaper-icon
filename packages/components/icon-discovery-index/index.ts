import type { App } from 'vue';
import _IconDiscoveryIndex from './icon-discovery-index.vue';

const IconDiscoveryIndex = Object.assign(_IconDiscoveryIndex, {
  install: (app: App) => {
    app.component(_IconDiscoveryIndex.name, _IconDiscoveryIndex);
  }
});

export default IconDiscoveryIndex;