import React from 'react';
import { Menu } from 'antd';
import { SidebarStyled } from './styled';

const LayoutSidebar: React.FC = () => {
  return (
    <SidebarStyled collapsible>
      <Menu theme="dark" mode="inline">
        {/* Các mục Menu */}
      </Menu>
    </SidebarStyled>
  );
};

export default LayoutSidebar;
