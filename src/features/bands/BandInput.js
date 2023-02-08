import React, { useState } from "react";

function BandInput({ onBandSubmit  }) {
  const [name, setName] = useState("");

  const handleChange = (e) => {
      setName(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onBandSubmit(name);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          <label>
            Name
            <input type="text" name="name" value={name} onChange={handleChange} />
          </label>
        </p>
        <button type="submit">Add Band</button>
      </form>
      <p>Form Text: {name}</p>
    </div>
  );
}

export default BandInput;
