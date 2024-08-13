import { writable } from 'svelte/store';

function createNavigationStore() {
    const { subscribe, update } = writable([]);

    return {
        subscribe,
        pushRoute: (route) => update(routes => [...routes, route]),
        popRoute: () => update(routes => routes.slice(0, -1)),
        clearRoutes: () => update(() => [])
    };
}

export const navigationHistory = createNavigationStore();