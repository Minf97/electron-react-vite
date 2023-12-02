import React from 'react';
import styles from './index.module.scss';
import { FolderAddOutlined, SettingOutlined } from '@ant-design/icons';
import { AllApplication, Comment , Peoples} from '@icon-park/react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return { label, key, icon, children, type };
}

const items: MenuProps['items'] = [
  getItem('简历列表', 'sub1', <AllApplication theme="outline" size="20" fill="#787486" />, [
    getItem('Item 1', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
    getItem('Item 2', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group')
  ]),
  getItem('推荐模板', 'sub1', <Comment theme="outline" size="20" fill="#787486"/>, [
    getItem('Item 1', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
    getItem('Item 2', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group')
  ]),

  getItem('导入简历', 'sub2', <FolderAddOutlined style={{ color: '$color-h2', fontSize: '20px' }} />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')])
  ]),

  getItem('公司管理', 'sub2', <Peoples theme="outline" size="20" fill="#787486"/>, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')])
  ]),

  getItem('Setting', 'sub4', <SettingOutlined style={{ color: '#787486', fontSize: '20px' }} />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12')
  ]),

  { type: 'divider' },

  getItem('Navigation Three', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12')
  ]),

  getItem('Group', 'grp', null, [getItem('Option 13', '13'), getItem('Option 14', '14')], 'group')
];

export default function Index() {
  const onClick: MenuProps['onClick'] = (e) => {
    console.log(e);
  };
  return (
    <Menu
      onClick={onClick}
      className={`user-select-none ${styles.menu}`}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
}
