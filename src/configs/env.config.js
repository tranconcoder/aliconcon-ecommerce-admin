import { getEnv } from '../helpers/env.helper';

export const API_URL = getEnv('REACT_APP_API_URL', 'http://localhost:4000');
export const APP_ENV = process.env.NODE_ENV || 'development';
