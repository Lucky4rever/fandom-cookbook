interface RequestProps {
  url: string;
}

interface ResponseProps<T> {
  isLoading: boolean;
  isEmpty: boolean;
  data: T;
}

const useBackend = async <T = unknown>({url}: RequestProps) => {
  try {
    let isLoading = true;
    let isEmpty = false;

    const request = async (url: string) => {
      const responseData = await fetch(url)
        .then((response) => response.json());

      isLoading = false;
      isEmpty = responseData === null;
      
      return responseData as T;
    };

    let data: T = await request(url);

    return {
      isLoading,
      isEmpty,
      data,
    } as ResponseProps<T>;
  } catch (error) {
    console.error(error);
  }
  
  return { 
    isLoading: false, 
    isEmpty: true, 
    data: null 
  } as ResponseProps<T>;
};

export default useBackend;
