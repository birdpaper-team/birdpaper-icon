import type { App } from 'vue';
import _IconCalendarScheduleLine from './icon-calendar-schedule-line.vue';

const IconCalendarScheduleLine = Object.assign(_IconCalendarScheduleLine, {
  install: (app: App) => {
    app.component(_IconCalendarScheduleLine.name, _IconCalendarScheduleLine);
  }
});

export default IconCalendarScheduleLine;