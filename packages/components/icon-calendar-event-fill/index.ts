import type { App } from 'vue';
import _IconCalendarEventFill from './icon-calendar-event-fill.vue';

const IconCalendarEventFill = Object.assign(_IconCalendarEventFill, {
  install: (app: App) => {
    app.component(_IconCalendarEventFill.name, _IconCalendarEventFill);
  }
});

export default IconCalendarEventFill;