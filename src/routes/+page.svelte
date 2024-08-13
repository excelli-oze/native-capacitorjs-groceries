<script>
	import DealOfTheDaySection from './DealOfTheDaySection.svelte';
	import HeroSection from './HeroSection.svelte';
	import Gelocation from './Gelocation.svelte';
	import Camera from './Camera.svelte';
	import Haptics from './Haptics.svelte';
	import AddProduct from './AddProduct.svelte';
	import Toast from './Toast.svelte';
	import Notification from './Notification.svelte';
	import Share from './Share.svelte';
	import ActionSheet from './ActionSheet.svelte';

	import { AppToWebPlugin } from './app-to-web-plugin';
	import { Capacitor } from '@capacitor/core';

	async function getAccessToken() {
		const platform = Capacitor.getPlatform();
		console.log(`Running on platform: ${platform}`);

		try {
			const result = await AppToWebPlugin.fetchAccessToken();
			console.log(`Access Token on ${platform}:`, result.accessToken);
			
			const sendDataToNative = async (data) => {
				const result = await AppToWebPlugin.receiveDataFromWeb({ data });
				return result;
			};
			sendDataToNative('Hello from Web').then((result) => {
				console.log('Success from web:', result.success);
			});

			
			return result.accessToken;
		} catch (error) {
			console.error(`Error fetching access token on ${platform}:`, error);
		}
	}
	getAccessToken();
</script>

<HeroSection />
<DealOfTheDaySection />
<div class="pb-20 bg-blue-300">
	<div class="container mx-auto">
		<div class="px-4 pt-16 md:px-20 max-w-screen-xl">
			<div class="mb-8 text-3xl font-bold md:text-4xl md:mb-4">Others</div>
			<div class="flex flex-col gap-4">
				<div class="md:flex md:flex-row md:gap-4 justify-between">
					<ActionSheet />
					<Notification />
					<Gelocation />
					<Camera />
					<Haptics />
				</div>
				<div class="md:flex md:flex-row md:gap-4 justify-between">
					<Toast />
					<Share />
					<AddProduct />
				</div>
			</div>
		</div>
	</div>
</div>
