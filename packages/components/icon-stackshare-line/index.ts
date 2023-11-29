import type { App } from 'vue';
import _IconStackshareLine from './icon-stackshare-line.vue';

const IconStackshareLine = Object.assign(_IconStackshareLine, {
  install: (app: App) => {
    app.component(_IconStackshareLine.name, _IconStackshareLine);
  }
});

export default IconStackshareLine;