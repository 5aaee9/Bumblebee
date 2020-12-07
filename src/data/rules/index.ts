import { AllOptions } from '@/types/client';

module.exports = [
    /* eslint-disable */
    // Bilibili 视频
    ...require('./media/bilibili').default,

    // 网易云音乐
    ...require('./media/netease_music').default,

    // GitHub
    // ...require('./github').default,

    // Clash 代理
    ...require('./utils/clash').default,

    // 地域代理
    ...require('./utils/geoip').default,

    {
        type: 'FINAL',
        proxy: 'Proxy'
    }
] as AllOptions[]
