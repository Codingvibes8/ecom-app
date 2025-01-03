import path from 'path';
import { NextConfig } from 'next';

const nextConfig: NextConfig = {
    webpack: (config) => {
        config.resolve.alias['@'] = path.join(__dirname, 'components');
        return config;
    },
};

export default nextConfig;
