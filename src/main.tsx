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
        components: {
          Menu: {
            itemPaddingInline: 10,
            colorSplit: '#DBDBDB'
          },
          Divider: {
            colorSplit: '#DBDBDB'
          }
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
