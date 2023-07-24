import useSWR from 'swr';
import axios from 'axios';


const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export function getAllPosts_SWR() {
  const { data, mutate, error } = useSWR<Post[]>('https://jsonplaceholder.typicode.com/posts', fetcher);

  return {
    posts: data ?? [], // nếu data = undefined sẽ là mảng rỗng
    mutate: mutate,
    isLoading: !error && !data,
    isError: error,
  };
}
