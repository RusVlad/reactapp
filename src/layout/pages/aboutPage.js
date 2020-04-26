import React from "react";

const AboutPage = () => {
  return (
    <div className="container">
      <h2 className="header">About</h2>
      <div>
        TODO:
        <br />
        <br />
        <input type="checkbox" checked disabled />
        <strike>Login / Logout / Register</strike>
        <br />
        <input type="checkbox" checked disabled />
        <strike>Items Page with CRUD</strike>
        <br />
        <input type="checkbox" disabled />
        Profile details and picture / Change Password
        <br />
        <input type="checkbox" disabled />
        Mobile burger header menu
        <br />
        <br />
        Features:
        <ul>
          <li>
            <input type="checkbox" disabled />
            gallery/media
          </li>
          <li>
            <input type="checkbox" disabled />
            cart and checkout
          </li>
          <li>
            <input type="checkbox" disabled />
            social media
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
