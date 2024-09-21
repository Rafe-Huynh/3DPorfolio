import { sidebar } from "../constant";

const Sidebar = () => {
  return (
    <div className="flex flex-col fixed top-1/3 left-0 z-0">
      <ul>
        {sidebar.map((item) => (
          <li
            key={item.href}
            className="w-[180px] h-[70px] flex justify-between items-center ml-[-100px]  duration-300 bg-white border border-white-500 px-[15px] rounded-r-[10px] duration-400 hover:ml-0"
          >
            <a className="flex justify-between no-underline items-center w-[500px] text-black" href={item.href} target={item.name === 'Contact' ? '_self' : '_blank'} rel={item.name === 'Contact' ? undefined : 'noopener noreferrer'}>
              {item.name}
              <item.logo size={item.size} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
