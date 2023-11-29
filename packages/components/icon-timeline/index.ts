import type { App } from 'vue';
import _IconTimeline from './icon-timeline.vue';

const IconTimeline = Object.assign(_IconTimeline, {
  install: (app: App) => {
    app.component(_IconTimeline.name, _IconTimeline);
  }
});

export default IconTimeline;