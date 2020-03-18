// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

 /* Base URL for Development environment */
 const basePath = 'https://electrificationapi-ams-dev-01.azure-api.net/common/api';

export const environment = {
  production: false,
  adalConfig: {
    tenant: 'ABB.onmicrosoft.com',
    clientId: '29fb0579-6eec-4734-af46-3e94310e05c9',
    postLogoutRedirectUri: 'http://localhost:4200/',
    cacheLocation: 'localStorage',
  },
  subscriptionKey: '367c9ca318744c26be742a005ed796dd',
  plantsURL: `${basePath}/plants`,
  assetsURL:`${basePath}/devices`,
  tokenKey : 'adal.access.token.key29fb0579-6eec-4734-af46-3e94310e05c9'
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
