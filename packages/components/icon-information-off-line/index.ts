import type { App } from 'vue';
import _IconInformationOffLine from './icon-information-off-line.vue';

const IconInformationOffLine = Object.assign(_IconInformationOffLine, {
  install: (app: App) => {
    app.component(_IconInformationOffLine.name, _IconInformationOffLine);
  }
});

export default IconInformationOffLine;