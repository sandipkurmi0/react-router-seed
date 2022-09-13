import React from "react";
import { Link, Outlet } from "react-router-dom";
import { css } from "@emotion/css";

const AdminStyles = css`
  .Admin {
    &-Header {
      display: flex;
      align-items: center;
    }
    &-New {
      text-decoration: none;
      border: 2px solid #fff;
      color: #fff;
      padding: 4px 10px;
      border-radius: 6px;
      font-weight: 600;
      text-transform: uppercase;
      margin-left: auto;
    }
  }
`;

const Admin = () => {
  return (
    <div className={AdminStyles}>
      <div className="Admin-Header">
        <h1>Admin</h1>
        <Link to="new" className="Admin-New">
          New
        </Link>
      </div>

      <Outlet />
    </div>
  );
};

export default Admin;
