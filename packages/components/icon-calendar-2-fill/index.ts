import type { App } from 'vue';
import _IconCalendar2Fill from './icon-calendar-2-fill.vue';

const IconCalendar2Fill = Object.assign(_IconCalendar2Fill, {
  install: (app: App) => {
    app.component(_IconCalendar2Fill.name, _IconCalendar2Fill);
  }
});

export default IconCalendar2Fill;