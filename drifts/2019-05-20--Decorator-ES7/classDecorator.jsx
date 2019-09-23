import React from 'react';

export function logRender(constructor) {
  const original = constructor.prototype.render;

  constructor.prototype.render = function() {
    console.log(`Rendering ${constructor.name}...`);
    return original.apply(this, arguments);
  };
}

@logRender
const Todos = () => {
  return <div />;
};
