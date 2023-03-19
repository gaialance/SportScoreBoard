import type { Config } from 'jest'

const config : Config = {
    moduleNameMapper:{
        'module_name_(.*)': '<rootDir>/substituted_module_$1.js',
        "\\.(css|less|scss|sass)$": "identity-obj-proxy",
        "@pages":'<rootDir>/src/pages'
    },
    testEnvironment:'jsdom',
}

export default config;