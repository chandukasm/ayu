import { ayuApi } from ".";
import { ayuUrls, methods } from "./ayuApis";

export const api_getAllPatients = () => {
  return ayuApi(ayuUrls.patients_getAll, methods.get);
};
