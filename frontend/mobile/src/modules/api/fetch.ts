import AsyncStorage from "@react-native-async-storage/async-storage";
import { curryPatternAsync } from "sage-functional-library";
import { ObjectValue } from "../../types";
const urlPref = "http://localhost:4666";
class HttpHeaders {
  private readonly contentType: string[] = ["Content-Type", "application/json"];
  constructor(private readonly token = AsyncStorage.getItem("token")) {}
  getHeaders = async (): Promise<HeadersInit> => ({
    [this.contentType[0]]: this.contentType[1],
    Authorization: `Bearer ${await this.token}`,
  });
}
interface ServerReponseI<ResponseDataType> {
  payload: ResponseDataType;
  error: boolean;
}
interface ServerErrorResponse {
  error: boolean;
  payload: string;
}

export const fetchMethods = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
} as const;

type FetchMethod = ObjectValue<typeof fetchMethods>;
class HttpFetch<Type> {
  public response: ServerReponseI<Type> = {} as ServerReponseI<Type>;
  constructor(
    private readonly headers: HttpHeaders,
    private readonly url: string,
    private readonly method: FetchMethod,
    private readonly body?: any
  ) {}
  fetch = async () => {
    const { method, url, headers, body } = this;
    const request = await fetch(
      `${process.env.SERVER_HOST}${process.env.SERVER_PORT}${url}`,
      {
        method,
        headers: await headers.getHeaders(),
        body: JSON.stringify(structuredClone(body)),
      }
    );
    this.response = await request.json();
    return this.response;
  };
}
const initFetch = async <T>(
  headers: HttpHeaders,
  { body, method, url }: { url: string; body?: any; method: FetchMethod }
) => {
  return new HttpFetch<T>(headers, url, method, body).fetch();
};
type FunctionalFetch = <T>(p2: {
  url: string;
  body?: any;
  method: FetchMethod;
}) => Promise<ServerReponseI<T>>;
const curryedFetch = curryPatternAsync(initFetch);
const functionalFetch: FunctionalFetch = curryedFetch(new HttpHeaders());

export { HttpFetch, HttpHeaders, functionalFetch, type FetchMethod };
