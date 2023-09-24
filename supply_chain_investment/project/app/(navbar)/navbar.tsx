import React from 'react';
import './navbar.css';
export default function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <h1>SupplySide</h1>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/farming">Farming</a>
          </li>
          <li>
          <a href="/transportation">Transportation</a>
            
          </li>
          <li>
          <a href="/warehouses">Warehouses</a>
          </li>
          <li>
          <a href="/retailers">Retail</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
