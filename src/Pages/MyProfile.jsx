import React, { useContext, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { AuthContext } from "../Provider/AuthProvider";

const MyProfile = () => {
  const { user, setUser, UpdateProfile } = useContext(AuthContext);

  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const [error, setError] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedPhoto = photo || user?.photoURL;
    const updatedname = name || user?.displayName;

    UpdateProfile({
      displayName: updatedname,
      photoURL: updatedPhoto,
    })
      .then(() => {
        setUser({
          ...user,
          displayName: updatedname,
          photoURL: updatedPhoto,
        });

        setEditMode(false);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <>
      <Header />

      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="bg-white w-full max-w-xl rounded-3xl shadow-sm border border-gray-100 p-10">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-serif font-bold text-gray-800">
              My Profile
            </h1>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center mb-6">
            <img
              src={
                user?.photoURL ||
                "https://cdn-icons-png.flaticon.com/512/3607/3607444.png"
              }
              alt="profile"
              className="w-28 h-28 rounded-full object-cover border-4 border-[#E9C46A]"
            />
          </div>

          {/* SHOW PROFILE */}
          {!editMode && (
            <>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                  <p className="text-sm text-gray-500">User Name</p>
                  <p className="text-lg font-semibold text-gray-800">
                    {user?.displayName}
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                  <p className="text-sm text-gray-500">User Email</p>
                  <p className="text-lg font-semibold text-gray-800">
                    {user?.email}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setEditMode(true)}
                className="w-full mt-8 bg-[#E9C46A] hover:bg-[#dfb44e] text-gray-800 font-bold py-3 rounded-xl"
              >
                Update Profile
              </button>
            </>
          )}

          {/* UPDATE FORM */}
          {editMode && (
            <form onSubmit={handleUpdate} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Photo URL
                </label>
                <input
                  type="text"
                  value={photo}
                  onChange={(e) => setPhoto(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#E9C46A] hover:bg-[#dfb44e] text-gray-800 font-bold py-3 rounded-xl"
              >
                Save Changes
              </button>
            </form>
          )}

          {error && (
            <p className="text-green-600 text-sm mt-4 text-center">{error}</p>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MyProfile;
