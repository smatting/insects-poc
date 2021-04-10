import React from 'react';

export function HelloWorld(props) {
  return <h1>Hello, {props.name || 'World!'}!</h1>;
}
