import type { App } from 'vue';
import _IconTimeLine from './icon-time-line.vue';

const IconTimeLine = Object.assign(_IconTimeLine, {
  install: (app: App) => {
    app.component(_IconTimeLine.name, _IconTimeLine);
  }
});

export default IconTimeLine;