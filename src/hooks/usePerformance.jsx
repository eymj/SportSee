import config from "../config";
import { mockPerformance } from "../mock/mockData";
import { useEffect, useState } from "react";

function usePerformance() {
  const { testMode, userId } = config;

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const mock = mockPerformance

  const url = `http://localhost:3000/user/${userId}/performance`

  async function getData() {
    try {
      let d = testMode ? mock : await fetch(url).then(res => res.json()).then(res => res.data)
      if (!d.data) throw 'No data'
      if (!d.kind) throw 'No data'
      const newData = []
      console.log(d)
      d.data.forEach((v) => {
        const k = d.kind[v.kind]
        newData.push({
          value: v.value,
          kind: k
        })
      })
      console.log(newData)
      return setData(newData)
    } catch (error) {
      console.error("API Error:", error);
      return setError(error)
    }
  }

  useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, error };
}

export default usePerformance;
