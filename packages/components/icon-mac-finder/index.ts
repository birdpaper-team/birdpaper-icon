import type { App } from 'vue';
import _IconMacFinder from './icon-mac-finder.vue';

const IconMacFinder = Object.assign(_IconMacFinder, {
  install: (app: App) => {
    app.component(_IconMacFinder.name, _IconMacFinder);
  }
});

export default IconMacFinder;