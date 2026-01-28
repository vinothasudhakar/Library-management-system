// jest.config.ts
import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest/presets/default-esm', // Use ESM preset for ts-jest
  testEnvironment: 'jsdom',  
  setupFiles: ['<rootDir>/jest.setupTests.ts'],            // Set the test environment to jsdom
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};

export default config;
