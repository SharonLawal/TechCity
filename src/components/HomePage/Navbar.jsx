import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaRegClipboard, FaNewspaper, FaLaptopCode, FaUserFriends, FaUsers, FaPlusCircle } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="flex h-screen max-w-fit bg-blue-50">
      {/* Sidebar */}
      <div className="w-1/6 min-w-max p-4">
        <nav className="space-y-4">
          {/* Navigation Links */}
          <NavLink
            to="board"
            className={({ isActive }) =>
              `flex items-center space-x-2 px-3 py-2 rounded ${
                isActive ? 'border-2 border-yellow-300 text-yellow-300' : 'text-blue-700'
              } focus:outline-none focus:ring-2 focus:ring-blue-500 hover:text-yellow-300`
            }
          >
            <FaRegClipboard />
            <span>Board</span>
          </NavLink>
          <NavLink
            to="news"
            className={({ isActive }) =>
              `flex items-center space-x-2 px-3 py-2 rounded ${
                isActive ? 'border-2 border-yellow-300 text-yellow-300' : 'text-blue-700'
              } focus:outline-none focus:ring-2 focus:ring-blue-500 hover:text-yellow-300`
            }
          >
            <FaNewspaper />
            <span>News</span>
          </NavLink>
          <NavLink
            to="devs"
            className={({ isActive }) =>
              `flex items-center space-x-2 px-3 py-2 rounded ${
                isActive ? 'border-2 border-yellow-300 text-yellow-300' : 'text-blue-700'
              } focus:outline-none focus:ring-2 focus:ring-blue-500 hover:text-yellow-300`
            }
          >
            <FaLaptopCode />
            <span>Devs</span>
          </NavLink>
          <NavLink
            to="mentors"
            className={({ isActive }) =>
              `flex items-center space-x-2 px-3 py-2 rounded ${
                isActive ? 'border-2 border-yellow-300 text-yellow-300' : 'text-blue-700'
              } focus:outline-none focus:ring-2 focus:ring-blue-500 hover:text-yellow-300`
            }
          >
            <FaUserFriends />
            <span>Mentors</span>
          </NavLink>
          <NavLink
            to="team"
            className={({ isActive }) =>
              `flex items-center space-x-2 px-3 py-2 rounded ${
                isActive ? 'border-2 border-yellow-300 text-yellow-300' : 'text-blue-700'
              } focus:outline-none focus:ring-2 focus:ring-blue-500 hover:text-yellow-300`
            }
          >
            <FaUsers />
            <span>Team</span>
          </NavLink>
        </nav>

        {/* Projects Section */}
        <div className="mt-8">
          <div className="text-black font-bold mb-4">Projects</div>
          <div className="space-y-2">
            <NavLink
              to="project1"
              className={({ isActive }) =>
                `flex items-center space-x-2 px-3 py-2 rounded ${
                  isActive ? 'border-2 border-yellow-300 text-yellow-300' : 'text-black'
                } focus:outline-none focus:ring-2 focus:ring-blue-500 hover:text-yellow-300`
              }
            >
              <FaUsers />
              <span>Project 1</span>
            </NavLink>
            <NavLink
              to="project2"
              className={({ isActive }) =>
                `flex items-center space-x-2 px-3 py-2 rounded ${
                  isActive ? 'border-2 border-yellow-300 text-yellow-300' : 'text-black'
                } focus:outline-none focus:ring-2 focus:ring-blue-500 hover:text-yellow-300`
              }
            >
              <FaUsers />
              <span>Project 2</span>
            </NavLink>
            <NavLink
              to="add-project"
              className={({ isActive }) =>
                `flex items-center space-x-2 px-3 py-2 rounded ${
                  isActive ? 'border-2 border-yellow-300 text-yellow-300' : 'text-blue-500'
                } focus:outline-none focus:ring-2 focus:ring-blue-500 hover:text-yellow-300`
              }
            >
              <FaPlusCircle />
            </NavLink>
          </div>
        </div>
      </div>

      {/* Vertical Line */}
      <div className="border-l border-blue-200"></div>
    </div>
  );
};

export default Navbar;
