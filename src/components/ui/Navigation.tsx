import Link from "next/link";
import Button from "./Button";

export default function Navigation() {
  return (
    <div className="flex items-end justify-end">
      <Link href="/">
        <Button
          variant="default"
          isLoading={false}
          size="sm"
          className="bg-slate-300 text-black m-2"
        >
          Reset
        </Button>
      </Link>
      <Link href="https://www.geektrust.com/" target="_blank">
        <Button
          variant="default"
          isLoading={false}
          className="bg-slate-300 text-black m-2"
          size="sm"
        >
          GeekTrust Home
        </Button>
      </Link>
    </div>
  );
}
