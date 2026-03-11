import React, { use } from "react";
import { NavLink } from "react-router";

const CategoryPromise = fetch("Category.json").then((res) => res.json());
const AllskillPromise = fetch("Skills.json").then((res) => res.json());
const Category = () => {
  const categories = use(CategoryPromise);
  const Skills = use(AllskillPromise);

  return (
    <section className="bg-[#fcfbf9] py-24 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-[#dfb14a] text-sm font-semibold tracking-[0.15em] uppercase mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <circle cx="12" cy="12" r="9" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="12" cy="12" r="1.5" strokeWidth={3} />
            </svg>
            Browse Categories
          </div>
          <h2 className="animate__animated animate__fadeInUp animate__slow text-5xl md:text-6xl font-serif font-bold text-[#1e1e1e]">
            What Do You Want to Learn?
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <NavLink to={`/category/${category.id}`}>
              <div
                key={category.id}
                className={`
                ${category.bg} 
                rounded-[2rem] p-8 
                flex flex-col items-center justify-center text-center 
                border border-black/[0.03] shadow-sm
                transition-all duration-300 hover:-translate-y-2 hover:shadow-md cursor-pointer
              `}
              >
                <div
                  className={`text-[40px] drop-shadow-sm mb-5 ${category.color}`}
                >
                  {category.icon}
                </div>

                <h3 className="font-bold text-[#1e1e1e] text-[17px] mb-1.5">
                  {category.name}
                </h3>

                <p className="text-[#8c93a1] text-sm font-medium">
                  {
                    Skills.filter((skill) => skill.categoryId === category.id)
                      .length
                  }{" "}
                  skills
                </p>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
