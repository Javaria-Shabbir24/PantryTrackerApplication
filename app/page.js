import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
       <h1 className="text-4xl p-4 text-center">Pantry Tracker Application</h1>
      
      <div>
        <form>
          <input type="text" placeholder='Enter Item'></input>
          <input type="number" placeholder='Enter $'></input>
          <button type="submit">+</button>
        </form>
      </div>

      </div>
    </main>
  );
}
