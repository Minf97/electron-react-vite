import React from 'react';
import ReactDOM from 'react-dom';
import { globalRouters } from './router';
import { RouterProvider } from 'react-router-dom';
import { HoxRoot } from 'hox';
import { ConfigProvider } from 'antd';
import AppBar from '@/components/AppBar';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          // 分割线
          colorSplit: '#DBDBDB'
        },
        components: {
          Menu: {
            itemPaddingInline: 10,
            // 激活时的背景样式
            controlItemBgActive: '#f1effd',
            // 选中时的文字样式
            itemSelectedColor: '#000',
            // 高度
            itemHeight: 45
          }
        }
      }}
    >
      <HoxRoot>
        <div id="win">
          {/* Bar顶部 */}
          {window.Main && <AppBar />}
          {/* 路由 */}
          <RouterProvider router={globalRouters}></RouterProvider>
        </div>
      </HoxRoot>
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
