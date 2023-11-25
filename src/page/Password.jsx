import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Password = () => {
  const [parol, setParol] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <form>
        <input
          type="text"
          required
          placeholder="parol"
          maxLength={12}
          value={parol}
          onChange={(e) => setParol(e.target.value)}
        />

        {parol === "4444" ? (
            <h1>TORI PAROL</h1>
        ) : (
            <h1>Bu Notogri Parol</h1>
        )}

        {parol === "4444" ? (
          <button
          type="button"
            onClick={() => {
              navigate("/admin");
              localStorage.setItem("userPass",parol);
            }}
          >
            Submit
          </button>
        ) : (
          <button  type="button" onClick={() => window.location.reload()}>Submit</button>
        )}
      </form>
    </div>
  );
};

export default Password;
