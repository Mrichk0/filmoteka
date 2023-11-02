import React from "react";
import Button from "../../shared/components/Button";

import useAuth from "../../shared/hooks/useAuth";

export default function UserPage() {
  const { dispatch } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "IS_LOGOUT" });
  };

  return (
    <main>
      <div className="container">
        <h1 style={{ marginBottom: "20px" }}>UserPage</h1>
        <Button handleClick={handleSubmit}>log out</Button>
      </div>
    </main>
  );
}
