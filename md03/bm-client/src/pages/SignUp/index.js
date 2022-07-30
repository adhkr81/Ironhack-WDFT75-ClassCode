import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { api } from "../../api/api";

export function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    confirmationEmail: "",
    password: "",
    confirmationPassword: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      if (
        form.email !== form.confirmationEmail ||
        form.password !== form.confirmationPassword
      ) {
        toast.error("Email ou senha não correspondem a confirmação");
        return;
      }

      const response = await api.post("/user/sign-up", form);

      console.log(response.data);

      toast.success("Cadastrado com sucesso!");
    } catch (err) {
      // soon
    }
  }

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <form onSubmit={handleSubmit}>
        <label>Nome</label>
        <input
          type="text"
          value={form.name}
          name="name"
          onChange={handleChange}
        />
        <label>E-mail</label>
        <input
          type="email"
          value={form.email}
          name="email"
          onChange={handleChange}
        />
        <label>Confirmação de e-mail</label>
        <input
          type="email"
          value={form.confirmationEmail}
          name="confirmationEmail"
          onChange={handleChange}
        />
        <label>Senha</label>
        <input
          type="password"
          value={form.password}
          name="password"
          onChange={handleChange}
        />
        <label>Confirmação da senha</label>
        <input
          type="password"
          value={form.confirmationPassword}
          name="confirmationPassword"
          onChange={handleChange}
        />

        <button type="submit">Cadastrar</button>
      </form>
    </>
  );
}
