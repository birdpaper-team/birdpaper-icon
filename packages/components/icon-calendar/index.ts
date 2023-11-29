import type { App } from 'vue';
import _IconCalendar from './icon-calendar.vue';

const IconCalendar = Object.assign(_IconCalendar, {
  install: (app: App) => {
    app.component(_IconCalendar.name, _IconCalendar);
  }
});

export default IconCalendar;