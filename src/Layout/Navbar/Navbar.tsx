import React, { useState } from 'react'
import { FiMenu } from "react-icons/fi";

import { textGray } from '../../Colors/colors';
import MenuDrawer from '../Mobile/MenuDrawer/MenuDrawer';

type Props = {
  viewType:"mobile"|"desktop"
}

const Navbar:React.FC<Props> = ({
  viewType
}) => {
  const [openMobileMenu,setOpenMobileMenu] = useState<boolean>(false)
  return (
    <div className='bg-white text-black w-full h-[45px] flex'>
      {viewType === "mobile" && <FiMenu
          fontSize={29}
          color={textGray}
          onClick={() => setOpenMobileMenu(!openMobileMenu)}
        />}
        {openMobileMenu && <MenuDrawer setOpenMobileMenu={setOpenMobileMenu}/>}
    </div>
  )
}

export default Navbar