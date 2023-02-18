const Navbar: React.FC<{ Toggle: JSX.Element; title: string }> = ({
  Toggle,
  title,
}) => {
  return (
    <div className="shadow-md w-screen py-4 px-8 flex items-center justify-between bg-gray-100 dark:bg-slate-700">
      <h1 className="text-slate-800 dark:text-gray-50 text-2xl font-bold">
        {title}
      </h1>
      {Toggle}
    </div>
  );
};

export default Navbar;
