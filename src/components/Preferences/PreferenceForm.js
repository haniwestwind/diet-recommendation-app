import React, { useState } from 'react';

function PreferenceForm() {
  const [preference, setPreference] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle preference submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Dietary Preference:
        <input 
          type="text" 
          value={preference} 
          onChange={e => setPreference(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default PreferenceForm;
