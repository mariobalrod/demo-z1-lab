import React, { FC } from 'react';
import { Component } from './styles';
import { Props } from './types';

const Button: FC<Props> = ({ children }) => {
  return (
    <Component>
      <span>{children}</span>
    </Component>
  );
};

export default Button;
