import type { App } from 'vue';
import _IconCalendarLine from './icon-calendar-line.vue';

const IconCalendarLine = Object.assign(_IconCalendarLine, {
  install: (app: App) => {
    app.component(_IconCalendarLine.name, _IconCalendarLine);
  }
});

export default IconCalendarLine;