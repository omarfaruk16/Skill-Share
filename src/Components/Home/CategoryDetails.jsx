import React, { useContext, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import Header from "../Header";
import Footer from "../Footer";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const SkillDetails = () => {
  const { id } = useParams();
  const skills = useLoaderData();
  const { user }= useContext(AuthContext)
  console.log(user)
  const [showForm, setShowForm] = useState(false);

  const skill = skills.find((data) => data.skillId === Number(id));

  const HandlebookingForm = (e) =>{
    e.preventDefault();
    e.target.reset();
    toast.success("Successfully Submited the form");
    setShowForm(false);
  }

  return (
    <>
      <Header></Header>
      <div className="animate__animated animate__fadeInUp animate__slow max-w-6xl mx-auto p-6">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <img
              src={skill.image}
              alt={skill.skillName}
              className="w-full rounded-2xl shadow-lg"
            />
          </div>

          <div className="space-y-5">
            <h1 className="text-4xl font-bold">{skill.skillName}</h1>

            <p className="text-gray-500">
              Category: <span className="font-semibold">{skill.category}</span>
            </p>

            <p className="text-lg">
              <span className="font-semibold">Instructor:</span>{" "}
              {skill.providerName}
            </p>

            <p className="text-lg">
              <span className="font-semibold">Contact:</span>{" "}
              {skill.providerEmail}
            </p>

            <p className="text-lg">
              <span className="font-semibold">Price:</span> ${skill.price}
            </p>

            <p className="text-lg">
              <span className="font-semibold">Rating:</span> ⭐ {skill.rating}
            </p>

            <p className="text-lg">
              <span className="font-semibold">Available Slots:</span>{" "}
              {skill.slotsAvailable}
            </p>

            <button
              onClick={() => setShowForm(true)}
              className="mt-4 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-xl font-semibold"
            >
              Book Session
            </button>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Skill Description</h2>
          <p className="text-gray-600 leading-relaxed">{skill.description}</p>
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white p-6 rounded-xl w-[400px] shadow-lg">
            <h2 className="text-xl font-bold mb-4">Submit Information</h2>

            <form
              onSubmit={HandlebookingForm}
              className="space-y-3"
            >
              <input
                type="text"
                defaultValue= { user.displayName }
                disabled
                className="w-full border p-2 rounded"
              />

              <input
                type="email"
                defaultValue= { user.email }
                disabled
                className="w-full border p-2 rounded"
              />

              <div className="flex justify-center mt-4">
                <button
                  type="submit"
                  className="px-4 py-2 bg-yellow-500 text-white rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <Footer></Footer>
    </>
  );
};

export default SkillDetails;
