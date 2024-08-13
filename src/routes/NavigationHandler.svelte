<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';
    import { navigationHistory } from '$lib/stores/navigationStore.js';
    import { App } from '@capacitor/app';
    
    onMount(() => {
        navigationHistory.clearRoutes();
    
        navigationHistory.pushRoute($page.url.pathname);
    
        const unsubscribe = page.subscribe(({ url }) => {
            navigationHistory.pushRoute(url.pathname);
        });
    
        App.addListener('backButton', handleBackButton);
    
        return () => {
            unsubscribe();
            App.removeAllListeners();
        };
    });
    
    function handleBackButton() {
        let routes;
        navigationHistory.subscribe(value => {
            routes = value;
        })();
    
        if (routes.length <= 1) {
            console.log("No more pages in history.");
            showExitConfirmation();
        } else {
            navigationHistory.popRoute();
            const previousRoute = routes[routes.length - 2];
            goto(previousRoute);
        }
    }
    
    function showExitConfirmation() {
        App.minimizeApp();
    }
    </script>