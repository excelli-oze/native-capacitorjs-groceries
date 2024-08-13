import { registerPlugin } from '@capacitor/core';

export interface AppToWebPluginPlugin {
  fetchAccessToken(): Promise<{ accessToken: string }>;
}

const AppToWebPlugin = registerPlugin<AppToWebPluginPlugin>('AppToWebPlugin', {
  web: {
    fetchAccessToken: async () => {
      console.log('Using mock implementation for web');
      return { accessToken: "web-mock-access-token" };
    },
    receiveDataFromWeb: async ({ data }) => {
      console.log('Mock receiveDataFromWeb called with:', data);
      return { success: true };
    }
  }
});

export { AppToWebPlugin };