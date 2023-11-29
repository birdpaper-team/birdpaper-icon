import type { App } from 'vue';
import _IconCalendarFill from './icon-calendar-fill.vue';

const IconCalendarFill = Object.assign(_IconCalendarFill, {
  install: (app: App) => {
    app.component(_IconCalendarFill.name, _IconCalendarFill);
  }
});

export default IconCalendarFill;