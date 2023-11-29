import type { App } from 'vue';
import _IconVerticalTimeline from './icon-vertical-timeline.vue';

const IconVerticalTimeline = Object.assign(_IconVerticalTimeline, {
  install: (app: App) => {
    app.component(_IconVerticalTimeline.name, _IconVerticalTimeline);
  }
});

export default IconVerticalTimeline;