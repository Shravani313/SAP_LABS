import { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("register");

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const [selectedCategory, setSelectedCategory] = useState("Veg");

  const categories = ["Veg", "Non-Veg", "Desserts", "Drinks"];

  const foodItems = {
    Veg: [
      { name: "Paneer Butter Masala", price: 200 },
      { name: "Veg Biryani", price: 150 }
    ],
    "Non-Veg": [
      { name: "Chicken Biryani", price: 250 },
      { name: "Mutton Curry", price: 300 }
    ],
    Desserts: [
      { name: "Ice Cream", price: 100 },
      { name: "Gulab Jamun", price: 80 }
    ],
    Drinks: [
      { name: "Coke", price: 40 },
      { name: "Fresh Juice", price: 90 }
    ]
  };

  const handleRegister = () => {
    if (user.name && user.email && user.password) {
      alert("Registration Successful!");
      setPage("login");
    } else {
      alert("Please fill all fields");
    }
  };

  const handleLogin = () => {
    if (
      loginData.email === user.email &&
      loginData.password === user.password
    ) {
      alert("Login Successful!");
      setPage("dashboard");
    } else {
      alert("Invalid Credentials");
    }
  };

  
  if (page === "register") {
    return (
      <div className="auth-container">
        <h2>Register</h2>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button onClick={handleRegister}>Register</button>
        <p onClick={() => setPage("login")} className="link">
          Already have account? Login
        </p>
      </div>
    );
  }

  
  if (page === "login") {
    return (
      <div className="auth-container">
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) =>
            setLoginData({ ...loginData, email: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setLoginData({ ...loginData, password: e.target.value })
          }
        />
        <button onClick={handleLogin}>Login</button>
        <p onClick={() => setPage("register")} className="link">
          Create new account
        </p>
      </div>
    );
  }

  
  return (
    <div>
      <div className="navbar">
        <h2>🍔 Swiggy Food App</h2>
        <button onClick={() => setPage("login")} className="logout">
          Logout
        </button>
      </div>

      <div className="category-section">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? "active" : ""}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="food-container">
        {foodItems[selectedCategory].map((item, index) => (
          <div className="food-card" key={index}>
            <h3>{item.name}</h3>
            <p>₹ {item.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
