/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';

interface IDataObject {
  url: string;
  data: object;
  headers?: object;
  API_BASE_URL?: string;
  accessTokenInHeaders?: boolean;
}

const useApiService = () => {
  let API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;
  // let API_BASE_URL = 'https://api.diggrowth.com/';
  const axiosInstance = axios.create();
  //   const access_token = userData?.access_token;

  return {
    // ========= get ==============
    get(obj: IDataObject, accessTokenInHeaders?: boolean) {
      if (obj.API_BASE_URL) {
        API_BASE_URL = obj.API_BASE_URL;
      }
      if (accessTokenInHeaders)
        return axiosInstance.get(API_BASE_URL + obj.url, {
          params: {
            ...obj.data,
          },
          headers: {
            // access_token: access_token,
            ...obj.headers,
          },
        });
      return axiosInstance.get(API_BASE_URL + obj.url, {
        params: {
          ...obj.data,
        },
        headers: { ...obj.headers },
      });
    },
    // ========= post ==============
    post(obj: IDataObject, accessTokenInHeaders?: boolean) {
      if (obj.API_BASE_URL) {
        API_BASE_URL = obj.API_BASE_URL;
      }
      if (accessTokenInHeaders)
        return axiosInstance.post(
          API_BASE_URL + obj.url,
          {
            ...obj.data,
          },
          {
            headers: {
              //   access_token: access_token,
              ...obj.headers,
            },
          }
        );
      return axiosInstance.post(
        API_BASE_URL + obj.url,
        {
          ...obj.data,
        },
        { headers: { ...obj.headers } }
      );
    },
    // ========= put ==============
    put(obj: IDataObject) {
      if (obj.API_BASE_URL) {
        API_BASE_URL = obj.API_BASE_URL;
      }
      return axiosInstance.put(
        API_BASE_URL + obj.url,
        {
          ...obj.data,
        },
        { headers: { ...obj.headers } }
      );
    },
    // ============ delete =================
    delete(obj: IDataObject) {
      if (obj.API_BASE_URL) {
        API_BASE_URL = obj.API_BASE_URL;
      }
      return axiosInstance.delete(API_BASE_URL + obj.url, {
        headers: { ...obj.headers },
        data: {
          ...obj.data,
        },
      });
    },
  };
};

const APIServices = useApiService();
export { APIServices };
export default useApiService;
