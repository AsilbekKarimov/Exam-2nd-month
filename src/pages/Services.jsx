import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div>
      <Navbar />
      <div className="p-7">
        <p className="text-3xl font-semibold text-center">Our Services</p>
        <div className="cards flex flex-wrap gap-10 justify-center pt-4">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Strategy</h2>
              <p>We use our strategy to make our code shorter and faster</p>
              <div className="card-actions justify-end">
                <Link to={"/"}>
                  <button className="btn btn-primary">Home</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Designing</h2>
              <p>Without designers we try to make our site look better</p>
              <div className="card-actions justify-end">
                <Link to={"/"}>
                  <button className="btn btn-primary">Home</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Development</h2>
              <p>There are huge development in our sphere also in frameworks</p>
              <div className="card-actions justify-end">
                <Link to={"/"}>
                  <button className="btn btn-primary">Home</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Fixing Bugs</h2>
              <p>In this month we solved lots of bugs that will improve our skills</p>
              <div className="card-actions justify-end">
                <Link to={"/"}>
                  <button className="btn btn-primary">Home</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Team Building</h2>
              <p>We made team making in our sites using github</p>
              <div className="card-actions justify-end">
                <Link to={"/"}>
                  <button className="btn btn-primary">Home</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Collaboration</h2>
              <p>We improve our collaborationonal skills</p>
              <div className="card-actions justify-end">
                <Link to={"/"}>
                  <button className="btn btn-primary">Home</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
