import { useState } from "react";
import "./App.css";

function App() {
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    phone: "",
    country: "",
    city: "",
    pan: "",
    aadhaar: ""
  });

  const errors = {
    firstName: !form.firstName,
    lastName: !form.lastName,
    username: !form.username,
    email: !/\S+@\S+\.\S+/.test(form.email),
    password: form.password.length < 6,
    phone: form.phone.length < 10,
    country: !form.country,
    city: !form.city,
    pan: !/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(form.pan),
    aadhaar: form.aadhaar.length !== 12
  };

  const isValid = Object.values(errors).every((e) => e === false);

  return (
    <div className="page">
      <form className="form">
        <h2>Registration Form</h2>

        <input placeholder="First Name" onChange={e => setForm({ ...form, firstName: e.target.value })} />
        {errors.firstName && <span>First Name is required</span>}

        <input placeholder="Last Name" onChange={e => setForm({ ...form, lastName: e.target.value })} />
        {errors.lastName && <span>Last Name is required</span>}

        <input placeholder="Username" onChange={e => setForm({ ...form, username: e.target.value })} />
        {errors.username && <span>Username is required</span>}

        <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
        {errors.email && <span>Invalid Email</span>}

        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          onChange={e => setForm({ ...form, password: e.target.value })}
        />
        {errors.password && <span>Password must be 6 characters</span>}

        <button type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? "Hide" : "Show"} Password
        </button>

        <input placeholder="Phone No + Country Code" onChange={e => setForm({ ...form, phone: e.target.value })} />
        {errors.phone && <span>Invalid Phone Number</span>}

        <input placeholder="Country" onChange={e => setForm({ ...form, country: e.target.value })} />
        {errors.country && <span>Country is required</span>}

        <input placeholder="City" onChange={e => setForm({ ...form, city: e.target.value })} />
        {errors.city && <span>City is required</span>}

        <input placeholder="PAN" onChange={e => setForm({ ...form, pan: e.target.value.toUpperCase() })} />
        {errors.pan && <span>Invalid PAN</span>}

        <input placeholder="Aadhaar" onChange={e => setForm({ ...form, aadhaar: e.target.value })} />
        {errors.aadhaar && <span>Invalid Aadhaar</span>}

        <button disabled={!isValid}>Submit</button>
      </form>
    </div>
  );
}

export default App;
