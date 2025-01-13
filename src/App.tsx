import React from 'react';
import { Wallet } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-12 flex items-center justify-between">
          <h1 className="text-3xl font-bold">DApp Starter</h1>
          <button className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20">
            <Wallet className="h-5 w-5" />
            Connect Wallet
          </button>
        </header>

        <main className="mx-auto max-w-2xl">
          <div className="rounded-xl bg-white/5 p-8 backdrop-blur-sm">
            <h2 className="mb-6 text-xl font-semibold">Welcome to DApp Starter</h2>
            <p className="text-gray-300">
              This template is set up with React, TypeScript, Tailwind CSS, and all the
              necessary configurations for building a decentralized application.
            </p>
            <div className="mt-6 space-y-4">
              <div className="rounded-lg bg-white/5 p-4">
                <h3 className="font-semibold">Features</h3>
                <ul className="mt-2 list-inside list-disc text-gray-300">
                  <li>TypeScript for type safety</li>
                  <li>Tailwind CSS for styling</li>
                  <li>ESLint for code linting</li>
                  <li>Prettier for code formatting</li>
                  <li>Vite for fast development and building</li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;