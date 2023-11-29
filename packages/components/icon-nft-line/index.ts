import type { App } from 'vue';
import _IconNftLine from './icon-nft-line.vue';

const IconNftLine = Object.assign(_IconNftLine, {
  install: (app: App) => {
    app.component(_IconNftLine.name, _IconNftLine);
  }
});

export default IconNftLine;