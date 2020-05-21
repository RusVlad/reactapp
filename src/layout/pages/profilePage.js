import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import * as userActions from "../../store/actions/userActions";

const LoginPage = () => {
  let dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);
  const [imgPreviewSrc, setImgPreviewSrc] = useState(null);

  useEffect(() => {
    if (!user._id) {
      dispatch(userActions.getUser(localStorage.getItem("user_id")));
    }
  }, []);

  const fileInput = useRef(null);

  const onFileSubmit = (evt) => {
    evt.preventDefault();

    if (fileInput.current.files && fileInput.current.files[0]) {
      setImgPreviewSrc(null);
      const file = fileInput.current.files[0];
      const newUserProfile = {
        ...user,
        avatar: file,
      };
      dispatch(userActions.updateProfile(newUserProfile));
    }
  };

  const onFileChange = () => {
    if (fileInput.current.files && fileInput.current.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        const file = e.target.result;
        setImgPreviewSrc(file);
      };
      reader.readAsDataURL(fileInput.current.files[0]);
    }
  };

  return (
    <div className="container">
      <h1 className="header">Profile</h1>
      <p className="profile-details">
        <span>Username: {user.username}</span>
        <span>Email: {user.email}</span>
      </p>
      {user.image && (
        <div className="profile-img">
          <img src={user.image} alt="profile image" />
        </div>
      )}
      <form
        className="profile-avatar-upload form"
        encType="multipart/form-data"
        onSubmit={onFileSubmit}
      >
        <div className="form-item">
          <label htmlFor="avatar">Avatar</label>
          <input
            id="avatar"
            type="file"
            ref={fileInput}
            onChange={onFileChange}
          />
        </div>
        {imgPreviewSrc && (
          <div className="img-preview">
            <span className="preview-label">
              Would you like to submit this photo as your new profile?
            </span>
            <div className="img-container">
              <img src={imgPreviewSrc} alt="profile preview image" />
            </div>
          </div>
        )}
        <button type="submit">Submit img</button>
      </form>
    </div>
  );
};

export default LoginPage;
