import { client } from "$services/redis";

const cacheRoutes = ["/about", "/privacy", "/auth/signin", "/auth/signup"]
export const getCachedPage = (route: string) => {
  if(cacheRoutes.includes(route)){
    return client.get('pagecache#' +route)
  }
};

export const setCachedPage = (route: string, page: string) => {};
