import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-[#f8d7da] p-4 shadow-lg">
  <div className="container mx-auto flex justify-between items-center">
    <ul className="flex justify-between w-1/2 flex list-none gap-8">
      <li>
        <Link href="/" className="text-[#0077b6] hover:text-[#d0ebff]  text-lg font-medium rounded-md p-2 transition-all duration-300 no-underline">Home</Link>
      </li>
      <li>
        <Link href="/tarta" className="text-[#0077b6] hover:text-[#d0ebff]  text-lg font-medium rounded-md p-2 transition-all duration-300 no-underline">Tarta</Link>
      </li>
      <li>
        <Link href="/pastelBoda" className="text-[#0077b6] hover:text-[#d0ebff]  text-lg font-medium rounded-md p-2 transition-all duration-300 no-underline">Pastel Boda</Link>
      </li>
      <li>
        <Link href="/infantil" className="text-[#0077b6] hover:text-[#d0ebff]  text-lg font-medium rounded-md p-2 transition-all duration-300 no-underline">Pastel infantil</Link>
      </li>
      <li>
        <Link href="/cumple" className="text-[#0077b6] hover:text-[#d0ebff]  text-lg font-medium rounded-md p-2 transition-all duration-300 no-underline">Pastel Cumpleaños</Link>
      </li>
    </ul>
  </div>
</nav>

  );
};

export default Navbar;
