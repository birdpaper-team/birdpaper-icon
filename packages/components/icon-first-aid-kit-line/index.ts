import type { App } from 'vue';
import _IconFirstAidKitLine from './icon-first-aid-kit-line.vue';

const IconFirstAidKitLine = Object.assign(_IconFirstAidKitLine, {
  install: (app: App) => {
    app.component(_IconFirstAidKitLine.name, _IconFirstAidKitLine);
  }
});

export default IconFirstAidKitLine;