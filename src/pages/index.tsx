import Board from '@/components/board/grid/Board';
import { mockBasicBoardProps } from '@/components/board/grid/Board.mocks';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-gray-50 dark:bg-slate-700 ">
        <h1 className="text-xl">Kanban Board</h1>
        <Board {...mockBasicBoardProps.base} />
      </main>
    </>
  );
}
