import React from 'react';
import styles from './index.module.scss';
import { AllApplication, Comment, Peoples, Config, Add } from '@icon-park/react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function Circle({ hex }: { hex?: string }) {
  return <div className={styles.circle} style={{ backgroundColor: hex || 'red', marginRight: '10px' }}></div>;
}

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
  getItem('简历列表', 'sub1', <AllApplication theme="outline" size="20" fill="#787486" strokeWidth={3} />),
  getItem('推荐模板', 'sub2', <Comment theme="outline" size="20" fill="#787486" strokeWidth={3} />),
  getItem('导入简历', 'sub3', <Add theme="outline" size="20" fill="#787486" strokeWidth={3} />),
  getItem('公司管理', 'sub4', <Peoples theme="outline" size="20" fill="#787486" strokeWidth={3} />),
  getItem('Setting', 'sub5', <Config theme="outline" size="20" fill="#787486" strokeWidth={3} />),
  { type: 'divider' },
  getItem(
    '我的项目',
    'grp',
    null,
    [
      getItem('我关注的人才', 'sub6', <Circle hex="#7AC555" />),
      getItem('我入库的人才', 'sub7', <Circle hex="#ffa500" />),
      getItem('我的最近浏览', 'sub8', <Circle hex="#e4ccfd" />),
      getItem('管理员后台', 'sub9', <Circle hex="#76a5ea" />)
    ],
    'group'
  )
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
