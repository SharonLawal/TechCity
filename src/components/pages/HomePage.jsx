import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Board from '../HomePage/Board';
import News from '../HomePage/News';
import Devs from '../HomePage/Devs';
import Mentors from '../HomePage/Mentors';
import Team from '../HomePage/Team';
import Header from '../HomePage/Header';
import Navbar from '../HomePage/Navbar';

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex">
        <Navbar />
        <div className="flex-grow p-6">
          <Routes>
            <Route path="board" element={<Board />} />
            <Route path="news" element={<News />} />
            <Route path="devs" element={<Devs />} />
            <Route path="mentors" element={<Mentors />} />
            <Route path="team" element={<Team />} />
            <Route path="/" element={<Board />} /> {/* Default Route */}
          </Routes>
        </div>
      </div>
      </div>
  );
}

export default HomePage;
