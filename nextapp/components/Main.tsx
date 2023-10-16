export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="h-full min-h-screen w-screen bg-teal-100 flex justify-center">
      <div className="w-full max-screen-lg bg-purple-300 flex justify-center">
        {children}
      </div>
    </main>
  );
}
