import type { App } from 'vue';
import _IconCalendarEventLine from './icon-calendar-event-line.vue';

const IconCalendarEventLine = Object.assign(_IconCalendarEventLine, {
  install: (app: App) => {
    app.component(_IconCalendarEventLine.name, _IconCalendarEventLine);
  }
});

export default IconCalendarEventLine;