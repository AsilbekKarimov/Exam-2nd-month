import React from 'react';
import Navbar from '../components/Navbar';
import { Footer } from '../components';

const About = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="mt-8 p-7">
        <p className="text-3xl font-bold">About Us</p>
        <div className="mt-4 text-gray-500 max-w-[60%]">
          <p>
            At front-826 IT group, we are dedicated to fostering innovation and learning within our team.
          </p>
          <p className="mt-2">
            Our mission is to empower each member to excel in their roles and contribute effectively to our projects.
          </p>
          <p className="mt-2">
            By embracing challenges like the upcoming exam, we aim to grow stronger and more resilient as a unit.
          </p>
          <p className="mt-2">
            Together, we're building a culture of continuous improvement and collaboration.
          </p>
          <p className='mt-2'>
            Over the past month, we have successfully completed numerous projects using the React framework. 
          </p>
          <p className="mt-2">
          Leveraging React's powerful capabilities, we've developed innovative solutions that meet our clients' needs and exceed expectations.
          </p>
          <p className='mt-2'>
            Our projects showcase our expertise in front-end development, demonstrating our ability to create responsive, user-friendly applications.
          </p>
          <p className='mt-2'>
            Moving forward, we are excited to continue harnessing React's potential to deliver cutting-edge solutions and drive business success.
          </p>
          <p>We need to be more stronger and faster at educating other frameworks also which we will learn in next months</p>
        </div>
      </div>
    </div>
  );
};

export default About;
