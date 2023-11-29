import type { App } from 'vue';
import _IconCalendarScheduleFill from './icon-calendar-schedule-fill.vue';

const IconCalendarScheduleFill = Object.assign(_IconCalendarScheduleFill, {
  install: (app: App) => {
    app.component(_IconCalendarScheduleFill.name, _IconCalendarScheduleFill);
  }
});

export default IconCalendarScheduleFill;