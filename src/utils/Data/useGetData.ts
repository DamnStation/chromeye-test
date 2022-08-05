import { useEffect, useState } from "react";
import People from "../Model";

// curl --request GET
//      --header 'content-type: application/json'
//      --url http://apis.chromeye.com:9191/people

const useGetData = () => {
  const [peopleList, setPeopleList] = useState<People[]>([] as People[]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://apis.chromeye.com:9191/people", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setPeopleList(data);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    };
    fetchData();
  }, []);
  return { peopleList, loading };
};

export default useGetData;
