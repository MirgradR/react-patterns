import { useEffect, useState } from "react";
import "./App.css";
import DataDisplayWithSpinner from "./components/DataDisplay";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const result = await response.json();
        setData(result.slice(0, 10)); // Берем первые 10 записей
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Server Data</h1>
      <DataDisplayWithSpinner isLoading={isLoading} data={data} />
    </div>
  );
}

export default App;
