import type { App } from 'vue';
import _IconCalendarView from './icon-calendar-view.vue';

const IconCalendarView = Object.assign(_IconCalendarView, {
  install: (app: App) => {
    app.component(_IconCalendarView.name, _IconCalendarView);
  }
});

export default IconCalendarView;