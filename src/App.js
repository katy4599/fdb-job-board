import React from 'react';
import Navbar from './components/Navbar';
import Links from './components/Links';
import SearchJobs from './components/SearchJobs';
import JobCards from './components/JobCards';

export default function App() {
  return (
    <div>
        <Navbar />
        <Links />
        <SearchJobs />
        <JobCards />
        <JobCards />
    </div>
  );
}

