import React, { useState } from "react";

import "./loginPage.module.css";

import Button from "../../shared/components/Button";
import useAuth from "../../shared/hooks/useAuth";

export default function LoginPage() {
  const { dispatch } = useAuth();

  const [formData, setFormData] = useState({ name: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.password) {
      alert("Please fill in all fields");
      return;
    }
    dispatch({ type: "IS_LOGIN" });
    setFormData({ name: "", password: "" });
  };

  return (
    <main>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label>
            Email
            <input
              type="email"
              name="name"
              onChange={handleChange}
              value={formData.name}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={formData.password}
            />
          </label>
          <Button>log in</Button>
        </form>
      </div>
    </main>
  );
}
