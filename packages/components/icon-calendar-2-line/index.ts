import type { App } from 'vue';
import _IconCalendar2Line from './icon-calendar-2-line.vue';

const IconCalendar2Line = Object.assign(_IconCalendar2Line, {
  install: (app: App) => {
    app.component(_IconCalendar2Line.name, _IconCalendar2Line);
  }
});

export default IconCalendar2Line;