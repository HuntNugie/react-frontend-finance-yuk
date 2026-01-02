export const Navbar = ({ onToggle }) => {
  return (
    <nav className="h-16 bg-white shadow px-6 flex items-center justify-between fixed top-0 inset-x-0 z-50">
      <div className="flex items-center gap-3">
        {/* Hamburger */}
        <button
          className="text-xl md:hidden hover:cursor-pointer"
          onClick={onToggle}
          aria-label="Toggle sidebar"
        >
          ☰
        </button>

        <img src="/image/logo-Only.png" alt="Logo" className="w-8 h-8" />
        <span className="font-bold text-indigo-600">FinanceYuk</span>
      </div>

      <div className="md:block text-sm italic text-gray-500">
        “Uang yang dicatat adalah uang yang terkendali.”
      </div>

      <div className="flex items-center gap-3">
        <span className="text-gray-700 font-medium">Nugie</span>
        <div className="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-600">
          N
        </div>
      </div>
    </nav>
  );
};
