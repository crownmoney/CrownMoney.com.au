const g = (typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : self) as any;

const fetch = g.fetch;
const Request = g.Request;
const Response = g.Response;
const Headers = g.Headers;

export { fetch, Request, Response, Headers };
export const FormData = g.FormData;
export const File = g.File;
export const Blob = g.Blob;

export default fetch;
