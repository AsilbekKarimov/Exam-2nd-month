import React, { useEffect, useState } from "react";
import { Navbar } from "../components";
import { IoSearch } from "react-icons/io5";

function getColorClass(eyeColor) {
  switch (eyeColor.toLowerCase()) {
    case "blue":
      return "text-blue-500";
    case "green":
      return "text-green-500";
    case "brown":
      return "text-orange-800";
    case "gray":
      return "text-stone-500";
    case "amber":
      return "text-amber-600";

    default:
      return "text-gray-500";
  }
}

function genderClass(gender) {
  switch (gender.toLowerCase()) {
    case "male":
      return "text-blue-500";

    default:
      return "text-pink-500";
  }
}

const Contacts = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users?limit=10")
      .then((data) => data.json())
      .then((res) => {
        console.log("users: ", res);
        setUsers((prevUsers) => [...prevUsers, ...res.users]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  console.log("asd", users);
  return (
    <div>
      {users && users.length > 0 ? (
        <div className="overflow-x-auto w-full">
          <Navbar />
          <div className="flex p-5 gap-10 items-center">
            <p className="font-bold text-2xl">Contacts</p>
            <div className="relative">
              <input
                type="search"
                placeholder="Search for a user"
                className="input input-bordered pl-8 w-full max-w-xl outline-none"
              />
              <IoSearch className="absolute left-2 top-1/2 transform -translate-y-1/2" />
            </div>
          </div>
          <table className="table w-full py-5">
            {/* head */}
            <thead>
              <tr className="text-[14px] text-slate-200">
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Name</th>
                <th>Job</th>
                <th>Age</th>
                <th className="text-center">Gender</th>
                <th>Birthday</th>
                <th>Blood Group</th>
                <th className="text-center">Email</th>
                <th>Username</th>
                <th>Eye Color</th>
                <th>Phone Number</th>
              </tr>
            </thead>
            <tbody>
              {users.map((item, id) => (
                <tr key={id}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-slate-300">
                          {item.firstName}
                        </div>
                        <div className="text-sm opacity-50">
                          {item.lastName}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-md">
                    <span className="text-slate-300">{item.company.name}</span>

                    <br />
                    <span className="bg-slate-800 text-xs rounded">
                      {item.company.title}
                    </span>
                  </td>
                  <td>{item.age}</td>
                  <td className={genderClass(item.gender)}>{item.gender}</td>
                  <td>{item.birthDate}</td>
                  <td className="text-center">{item.bloodGroup}</td>
                  <td className="text-center">{item.email}</td>
                  <td>{item.username}</td>
                  <td className={getColorClass(item.eyeColor)}>
                    {item.eyeColor}
                  </td>
                  <td>{item.phone}</td>
                </tr>
              ))}
            </tbody>
            {/* foot */}
            <tfoot>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Name</th>
                <th>Job</th>
                <th>Age</th>
                <th className="text-center">Gender</th>
                <th>Birthday</th>
                <th>Blood Group</th>
                <th className="text-center">Email</th>
                <th>Username</th>
                <th>Eye Color</th>
                <th>Weight</th>
              </tr>
            </tfoot>
          </table>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Contacts;
