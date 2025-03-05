import config from "../config";
import { mockAverageSessions } from "../mock/mockData";
import { useEffect, useState } from "react";

function useAverageSessions() {
  const { testMode, userId } = config;

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const mock = mockAverageSessions

  const url = `http://localhost:3000/user/${userId}/average-sessions`

  async function getData() {
    try {
      let d = testMode ? mock.sessions : await fetch(url).then(res => res.json()).then(res => res.data.sessions)
      if (!d) throw 'No data'
      return setData(d)
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

export default useAverageSessions;
