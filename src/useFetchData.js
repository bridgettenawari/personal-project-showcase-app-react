import { useEffect, useState } from "react";

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
    .then((r) => {
      if(!r.ok) throw new Error (`${r.status} Could not fetch data!`)
        return r.json()
    })
  .then((result) => setData(result))
  }, [])
  return [data]
}
 
export default useFetchData;