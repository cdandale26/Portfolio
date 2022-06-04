import React from "react";

const Project = ({ item }) => {
  return (
    <div key={item.id} className="flex flex-col items-center text-center">
      <div className="mb-8">
        <img className="rounded-2xl" src={item.image} alt="" />
      </div>
      <p className="capitalize text-accent text-sm mb-3">{item.category}</p>
      <h3 className="text-1.5xl font-semibold capitalize mb-3">{item.name}</h3>
      <p className="text-base text-justify max-w-md">{item.description}</p>

      <div className="inline-flex">
        <button
          onClick={() => window.open(item.href)}
          type="button"
          className="btn px-3 py-2 m-0.5 text-sm font-medium text-center text-white btn-sm bg-accent hover:bg-secondary-hover transition-all"
        >
          Live
        </button>

        <button
          onClick={() => window.open(item.git_link)}
          type="button"
          className="btn px-3 py-2 m-0.5 text-sm font-medium text-center text-white btn-sm bg-accent hover:bg-secondary-hover transition-all"
        >
          Code
        </button>
      </div>
    </div>
  );
};

export default Project;
