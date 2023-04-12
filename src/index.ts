import { apiClient } from "./lib/apiClient"

const main = async () => {
  const res = await apiClient.ip.$get()
  console.log(res.origin)
}

main()
