
 /* Base URL for Development environment */
 const basePath = 'https://electrificationapi-ams-dev-01.azure-api.net/common/api';

export const environment = {
  production: false,
  adalConfig: {
    tenant: 'ABB.onmicrosoft.com',
    clientId: '29fb0579-6eec-4734-af46-3e94310e05c9',
    postLogoutRedirectUri: 'http://electrificationportal-wa-dev-01.azurewebsites.net/',
    cacheLocation: 'localStorage',
  },
  subscriptionKey: '367c9ca318744c26be742a005ed796dd',
  plantsURL: `${basePath}/plants`,
  assetsURL:`${basePath}/devices/`,
  tokenKey : 'adal.access.token.key29fb0579-6eec-4734-af46-3e94310e05c9'
};
