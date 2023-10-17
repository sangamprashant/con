import React, { useState } from "react";
import bgImage from "./image/cover.png";

function Form() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });

      if (response.status === 201) {
        alert('Form data submitted successfully');
        // Clear the textarea after successful submission
        setText(""); // Reset the text state to an empty string
      } else {
        alert('An error occurred while submitting the form');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  // Get the current date and time
  const currentDate = new Date().toLocaleString();

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        filter: "grayscale(20%)",
      }}
    >
      <form
        className="bg-gray-800 shadow-md rounded-md px-8 pt-6 pb-8 mb-4 w-700"
        onSubmit={handleSubmit}
      >
        <div className="mb-4 w-full">
          <label className="block text-white text font-bold mb-2">
            Drop your confession here ❤️✌🏻
          </label>
          <span className="block text-white text-sm font-bold mb-2">
            {currentDate}
          </span>
          <textarea
            className="resize-none border rounded w-full py-2 px-3"
            placeholder="Enter text here"
            value={text}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded focus-outline-none focus-shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
