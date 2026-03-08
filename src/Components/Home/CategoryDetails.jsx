import React from "react";
import { useLoaderData, useParams } from "react-router";
import Header from "../Header";
import Footer from "../Footer";

const SkillDetails = () => {
  const { id } = useParams();
  const skills = useLoaderData();

  const skill = skills.find((data) => data.skillId === Number(id));

  return (
    <>
    <Header></Header>
      <div className="max-w-6xl mx-auto p-6">
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

            <button className="mt-4 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-xl font-semibold">
              Book This Skill
            </button>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Skill Description</h2>
          <p className="text-gray-600 leading-relaxed">{skill.description}</p>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default SkillDetails;
