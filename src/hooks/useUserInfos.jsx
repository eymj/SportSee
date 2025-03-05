import config from "../config";
import { mockUser } from "../mock/mockData";
import { useEffect, useState } from "react";

function useUserInfos() {
  const { testMode, userId } = config;

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const mock = mockUser;

  const url = `http://localhost:3000/user/${userId}`;

  async function getData() {
    try {
      let d = testMode
        ? mock.userInfos
        : await fetch(url)
            .then((res) => res.json())
            .then((res) => res.data.userInfos);
      if (!d) throw "No data";
      return setData(d);
    } catch (error) {
      console.error("API Error:", error);
      return setError(error);
    }
  }

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, error };
}

export default useUserInfos;
