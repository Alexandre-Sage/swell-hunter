import { fetchMethods, functionalFetch, FetchMethod } from "./fetch";
type FetchParams<RequestType, RequestBody = null> = RequestType extends
  | typeof fetchMethods.GET
  | typeof fetchMethods.DELETE
  ? {
      urlSufix?: string;
      urlParams?: string;
    }
  : RequestType extends typeof fetchMethods.POST
  ? {
      urlSufix?: string;
      payload?: RequestBody;
    }
  : { urlSufix?: string; requestBody?: RequestBody; urlParams?: string };
const formatUrl = (
  urlPrefix: string,
  urlSufix?: string,
  urlParams?: string
) => {
  return `${urlPrefix}${urlSufix ? `${urlSufix}/` : ""}${
    urlParams ? `${urlParams}/` : ""
  }`;
};
export class CrudAPI<Type, TypeId> {
  constructor(readonly prefix: string) {}
  post = async ({ payload, urlSufix }: FetchParams<"POST", Type>) => {
    return await functionalFetch<Type>({
      url: formatUrl(this.prefix, urlSufix), //`${this.prefix}${`${urlSuffix}/` ?? ""}`,
      method: "POST",
      body: { ...payload },
    });
  };
  fetchMultiple = async ({ urlParams, urlSufix }: FetchParams<"GET">) => {
    return functionalFetch<Type>({
      url: formatUrl(this.prefix, urlSufix, urlParams), //`${this.prefix}`,
      method: "GET",
    });
  };
  fetchOne = async ({ urlParams, urlSufix }: FetchParams<"GET">) => {
    return functionalFetch<Type>({
      url: formatUrl(this.prefix, urlSufix, urlParams), //`${this.prefix}/${id}`,
      method: "GET",
    });
  };
  delete = async (id: TypeId) => {
    functionalFetch<Type>({
      url: `${this.prefix}/${id}`,
      method: "DELETE",
    });
  };
  update = async (payload: Type, id: TypeId) => {
    return functionalFetch<Type>({
      url: `${this.prefix}/${id}`,
      method: "PUT",
      body: { payload },
    });
  };
}
