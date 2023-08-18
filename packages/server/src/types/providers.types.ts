export type useFactoryProvider = {
  provide: string;
  useFactory: any;
  inject: string[];
};

export type useFactoryProviders = useFactoryProvider[];
