import { useState } from "react";
const [data, setData] = useState([]);
const usePostData = (url) => {
  fetch(url)
  .then((r) => {
    if(!r.ok) throw new Error
  })
  return
}
 
export default usePostData;