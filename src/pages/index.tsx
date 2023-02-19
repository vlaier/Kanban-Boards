import { BoardContextProvider } from '@/components/board/BoardContext';
import { TaskFormModal } from '@/components/board/form/TaskForm';
import Board from '@/components/board/grid/Board';
import { mockBasicBoardProps } from '@/components/board/grid/Board.mocks';
import Navbar from '@/components/navigation/navbar/Navbar';
import { Toggle } from '@/components/ui/toggle/Toggle';
import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const Switch = <Toggle enabled={isDark} setEnabled={setIsDark} />;
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${isDark && 'dark'}`}>
        <Navbar Toggle={Switch} title="Kanban" />
        <main className="min-h-screen bg-gray-50 dark:bg-slate-700 px-16 dark:text-gray-50">
          <h2 className="text-xl font-bold mb-8">Your Project</h2>
          <BoardContextProvider initialTasks={mockBasicBoardProps.base}>
            <Board />
          </BoardContextProvider>
        </main>
      </div>
    </>
  );
}
