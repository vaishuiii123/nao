
import knavLogo from "../images/KNAV logo.png"; // fix name if needed

type Props = {
  user: {
    name: string;
    email: string;
  };
  onLogout: () => void;
};

export default function Header({ user, onLogout }: Props) {
  return (
    <header className="h-14 bg-[#F3F3F3] flex items-center justify-between px-6 border-b border-gray-300">

      {/* LEFT SECTION */}
      <div className="flex items-center gap-4">
        
        {/* Logo */}
        <img
          src={knavLogo}
          alt="KNAV Logo"
          className="h-8 object-contain"
        />

        {/* Divider (subtle) */}
        <div className="h-6 w-px bg-gray-300"></div>

      </div>

      {/* RIGHT SECTION */}
      <div className="flex flex-col items-end text-xs text-gray-700 leading-tight">

        {/* User Email */}
        <span className="font-medium text-sm">
          {user.email}
        </span>

        {/* Team Name */}
        <span className="text-[11px] text-gray-500">
          (NAO Core Team)
        </span>

        {/* Logout */}
        <button
          onClick={onLogout}
          className="text-[#98002E] underline text-xs mt-1 hover:text-red-700"
        >
          Logout
        </button>
      </div>

    </header>
  );
}
