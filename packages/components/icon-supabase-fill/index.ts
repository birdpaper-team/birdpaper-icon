import type { App } from 'vue';
import _IconSupabaseFill from './icon-supabase-fill.vue';

const IconSupabaseFill = Object.assign(_IconSupabaseFill, {
  install: (app: App) => {
    app.component(_IconSupabaseFill.name, _IconSupabaseFill);
  }
});

export default IconSupabaseFill;