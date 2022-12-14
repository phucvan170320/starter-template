import { useSearchParams } from 'react-router-dom'
export const useQueryString = () => {
  const [searchParam] = useSearchParams()
  const searchParamObject = Object.fromEntries([...searchParam])
  return searchParamObject
}
