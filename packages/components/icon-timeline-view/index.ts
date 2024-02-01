import type { App } from 'vue';
import _IconTimelineView from './icon-timeline-view.vue';

const IconTimelineView = Object.assign(_IconTimelineView, {
  install: (app: App) => {
    app.component(_IconTimelineView.name, _IconTimelineView);
  }
});

export default IconTimelineView;