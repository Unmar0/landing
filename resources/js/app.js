import '../css/app.css';
import 'primeicons/primeicons.css';
import './bootstrap';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

createInertiaApp({
	resolve: (name) =>
		resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
	setup({ el, App, props, plugin }) {
		return createApp({ render: () => h(App, props) })
			.use(plugin)
			.use(PrimeVue, {
				theme: {
					preset: Aura,
					options: {
						darkModeSelector: false,
					},
				},
			})
			.mount(el);
	},
	progress: {
		color: '#4b5563',
	},
});
