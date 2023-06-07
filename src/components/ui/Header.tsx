import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="flex bg-slate-950 text-white items-center justify-center p-6 text-3xl">
        <Link href="/">Finding Falcone</Link>
      </div>
    </>
  );
}
