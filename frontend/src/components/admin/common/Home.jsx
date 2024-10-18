import React from 'react';

function Home() {
  return (
    <div className="hero bg-cover bg-center h-screen flex items-center justify-center bg-black">
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Welcome to Your Study Platform</h1>
        <p className="text-lg md:text-2xl mb-8 text-white">Empower your learning journey with us.</p>
        <a
          href="/register"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}

export default Home;
