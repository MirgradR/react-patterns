import { withLoadingSpinner } from "../utils/withLoadingSpinner";

const DataDisplay = ({ data }) => (
  <div className="data-container">
    {data ? (
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    ) : (
      <p>No data available</p>
    )}
  </div>
);

const DataDisplayWithSpinner = withLoadingSpinner(DataDisplay);

export default DataDisplayWithSpinner;
