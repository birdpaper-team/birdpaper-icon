import type { App } from 'vue';
import _IconCalendarDot from './icon-calendar-dot.vue';

const IconCalendarDot = Object.assign(_IconCalendarDot, {
  install: (app: App) => {
    app.component(_IconCalendarDot.name, _IconCalendarDot);
  }
});

export default IconCalendarDot;