import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeClassName="active" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/floating-ui" activeClassName="active">
              Floating UI
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
