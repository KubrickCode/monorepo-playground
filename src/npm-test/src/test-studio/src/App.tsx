import { useState } from "react";

export const App = () => {
  const [path, setPath] = useState("");

  const handleSubmit = async () => {
    const response = await fetch("/create-json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ path }),
    });
    console.log(response);
    const data = await response.json();
    alert(data.message);
  };

  return (
    <div>
      <input
        type="text"
        value={path}
        onChange={(e) => setPath(e.target.value)}
        placeholder="Enter the path for JSON file"
      />
      <button onClick={handleSubmit}>Create JSON File</button>
    </div>
  );
};
