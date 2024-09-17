export default function App() {
  return (
    <div className="h-full w-full bg-black text-white">
      <div className="w-full h-screen flex items-center justify-center flex-col gap-4">
        <div className="text-center">
          <p className="text-3xl font-semibold uppercase font-mono">e-commerence</p>
          {/* <p className="text-sm text-gray-400">Coming soon!</p> */}
        </div>
        <button className="bg-white text-black px-6 py-3 rounded-xl cursor-pointer hover:opacity-50">
          Click Me
        </button>
      </div>
    </div>
  );
}
