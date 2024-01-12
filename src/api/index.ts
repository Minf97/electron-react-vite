import { extend } from 'umi-request';

// 测试环境
export const TEST_URL = 'http://182.42.80.183:15001';
// 生产环境
export const PRO_URL = '占位';
// 当前环境
export const NOW_URL = import.meta.env.MODE === 'production' ? PRO_URL : TEST_URL;

const request = extend({
  prefix: NOW_URL,
});

request.interceptors.request.use((url, options) => {
  console.log('request', url, options);
  Object.assign(options.data, { a: 1 });
  return {
    url,
    options
  };
});

request('/api', { method: 'POST', data: { b: 2 } });
