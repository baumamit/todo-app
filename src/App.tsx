function App() {
  return (
    <main className="flex flex-col items-center justify-center h-screen gap-1">
      <h1 className="text-4xl font-bold">Hey there!</h1>
      <p className="text-lg">Welcome to your new React app.</p>
      <p className="text-lg">
        Get started by editing <code className="bg-gray-200 py-1 px-2 rounded">src/App.tsx</code>.
      </p>
      <p className="text-lg">
        This project was created using{" "}
        <a href="https://reactjs.org" className="text-sky-600 border-b-2 border-transparent hover:border-sky-600 transition duration-200">
          React
        </a>
        ,{" "}
        <a href="https://tailwindcss.com" className="text-sky-600 border-b-2 border-transparent hover:border-sky-600 transition duration-200">
          Tailwind CSS
        </a>{" "}
        and{" "}
        <a href="https://typescriptlang.org" className="text-sky-600 border-b-2 border-transparent hover:border-sky-600 transition duration-200">
          TypeScript
        </a>
        .
      </p>
      <p className="text-lg">We will create a simple todo app in this project. Let's get started!</p>
    </main>
  );
}

export default App;
