import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='w-screen h-screen relative'>
        <div className='md:pl-[250px] pl-[60px] pr-[20px] pt[70px] w-full h-full overflow-y-auto'></div>
        <Outlet />
    </div>
  );
};

export default Layout;