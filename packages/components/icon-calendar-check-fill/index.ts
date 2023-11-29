import type { App } from 'vue';
import _IconCalendarCheckFill from './icon-calendar-check-fill.vue';

const IconCalendarCheckFill = Object.assign(_IconCalendarCheckFill, {
  install: (app: App) => {
    app.component(_IconCalendarCheckFill.name, _IconCalendarCheckFill);
  }
});

export default IconCalendarCheckFill;