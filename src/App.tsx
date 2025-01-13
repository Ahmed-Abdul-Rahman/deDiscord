import { Wallet } from 'lucide-react';
import Home from './screens/Home';
import React from 'react';

function App() {  
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-12 flex items-center justify-between">
          <h1 className="text-3xl font-bold">DeDiscord App</h1>
          <button className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20">
            <Wallet className="h-5 w-5" />
            Connect Wallet
          </button>
        </header>

        <Home/>
      </div>
    </div>
  );
}

export default App;