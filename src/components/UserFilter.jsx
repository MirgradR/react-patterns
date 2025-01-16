import { useState } from "react";

const UserFilter = ({ children }) => {
  const [filter, setFilter] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Фильтр по имени"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      {children(filter)}
    </div>
  );
};

export default UserFilter;
