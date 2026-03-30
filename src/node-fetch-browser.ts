const g = (typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : self) as any;

export const fetch = g.fetch;
export const Request = g.Request;
export const Response = g.Response;
export const Headers = g.Headers;
export const FormData = g.FormData;
export const File = g.File;
export const Blob = g.Blob;

export default g.fetch;
