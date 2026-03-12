import React from "react";
import { useLoaderData, useParams } from "react-router";
import SingleSkill from "./SingleSkill";

const CategorySkills = () => {
  const { id } = useParams();
  const Allskill = useLoaderData();
  const skills = Allskill.filter((data) => data.categoryId == id);
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-2 p-4'>
        {
            skills.map((skill)=> (<SingleSkill skill={skill}></SingleSkill>))
        }
    </div>
  );
};

export default CategorySkills;
