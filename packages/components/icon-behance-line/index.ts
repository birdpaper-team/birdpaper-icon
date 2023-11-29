import type { App } from 'vue';
import _IconBehanceLine from './icon-behance-line.vue';

const IconBehanceLine = Object.assign(_IconBehanceLine, {
  install: (app: App) => {
    app.component(_IconBehanceLine.name, _IconBehanceLine);
  }
});

export default IconBehanceLine;