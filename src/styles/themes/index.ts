import base from './base';

export type Theme = typeof base;

export type Color = keyof Theme['colors'];

export default base;
