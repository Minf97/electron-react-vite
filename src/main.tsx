import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HoxRoot } from 'hox';
import { ConfigProvider } from 'antd';
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
          },
        }
      }}
    >
      <HoxRoot>
        <App />
      </HoxRoot>
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
