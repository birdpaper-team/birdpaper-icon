import type { App } from 'vue';
import _IconSupabaseLine from './icon-supabase-line.vue';

const IconSupabaseLine = Object.assign(_IconSupabaseLine, {
  install: (app: App) => {
    app.component(_IconSupabaseLine.name, _IconSupabaseLine);
  }
});

export default IconSupabaseLine;