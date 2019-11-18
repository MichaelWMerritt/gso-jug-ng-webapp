import { EnvService } from "./env.service";

export const EnvServiceFactory = () => {

  const env =  new EnvService();

  const browserWindow = window || {};
  const browserWindowEnv = browserWindow['__env'] || {};

  for (const key in browserWindowEnv) {
    if (browserWindowEnv.hasOwnProperty(key)) {
      env[key] = browserWindowEnv[key];
    }
  }

  return env;

};

export const EnvServiceProvider = {
  provide: EnvService,
  useFactory: EnvServiceFactory,
  deps: []
};
