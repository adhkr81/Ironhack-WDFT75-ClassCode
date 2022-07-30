import { useState } from "react";
export function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    age: 0,
    sub: false,
  });

  function handleChange(e) {
    if (e.target.name === "sub") {
      setForm({ ...form, sub: e.target.checked });
      console.log(form);
      return;
    }

    setForm({ ...form, [e.target.name]: e.target.value });

    console.log(form);
  }

  return (
    <form>
      <label htmlFor="input-name">Nome:</label>
      <input
        id="input-name"
        type="text"
        value={form.name}
        name="name"
        onChange={handleChange}
      />

      <label htmlFor="input-email">E-mail:</label>
      <input
        id="input-email"
        type="email"
        value={form.email}
        name="email"
        onChange={handleChange}
      />

      <label htmlFor="input-password">Senha:</label>
      <input
        id="input-password"
        type="password"
        value={form.password}
        name="password"
        onChange={handleChange}
      />

      <label htmlFor="input-age">Idade:</label>
      <input
        id="input-age"
        type="number"
        value={form.age}
        name="age"
        onChange={handleChange}
      />

      <label htmlFor="input-sub">Deseja receber nossa newsletter?</label>
      <input
        id="input-sub"
        type="checkbox"
        name="sub"
        // PROBLEMA TULIO!
        checked={form.sub}
        onChange={handleChange}
      />
    </form>
  );
}
