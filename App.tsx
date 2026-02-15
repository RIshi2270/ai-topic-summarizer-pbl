import React from 'react';
import { Header } from './components/Header';
import { ProblemStatement } from './components/ProblemStatement';
import { Methodology } from './components/Methodology';
import { Results } from './components/Results';
import { Footer } from './components/Footer';
import { Timer } from './components/Timer';

function App() {
  return (
    <div className="min-h-screen font-sans text-gray-900 bg-white selection:bg-blue-100">
      <Header />
      <main className="flex flex-col gap-12 pb-20">
        <ProblemStatement />
        <Methodology />
        <Results />
      </main>
      <Footer />
      <Timer />
    </div>
  );
}

export default App;