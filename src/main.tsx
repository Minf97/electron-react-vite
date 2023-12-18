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
