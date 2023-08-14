export const AppProviders = [
  {
    provide: "APP_PROVIDER",
    useFactory: () => true,
    inject: ["ASYNC_CONNECTION"],
  },
];
