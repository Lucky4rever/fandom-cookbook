import axios from 'axios';
import type { Method } from 'axios';

interface RequestProps {
  url: string;
  method?: Method | undefined;
  requestData?: unknown;
}

interface ResponseProps<T> {
  isLoading: boolean;
  isEmpty: boolean;
  data: T | null;
}

const useBackend = <T = unknown>({url, method = 'GET', requestData}: RequestProps) => {
  let responseProps: ResponseProps<T> = {
    isLoading: true,
    isEmpty: true,
    data: null,
  }

  const request = async (data?: unknown): Promise<Awaited<T> | null> => {
    const response = await axios({ method, url, data });

    responseProps.isLoading = false;
    
    return response.data as Awaited<T> | null;
  };

  request(requestData).then((responseData) => { 
    responseProps.isEmpty = responseData === null;

    responseProps.data = responseData;
  });

  return responseProps;
};

export default useBackend;
