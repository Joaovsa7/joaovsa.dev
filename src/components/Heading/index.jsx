import React from 'react';

const Heading = ({ tag, children }) => {
  if(tag === 'h1') return <h1>{children}</h1>;
  if(tag === 'h2') return <h2>{children}</h2>;
  if(tag === 'h3') return <h3>{children}</h3>;
  return <h1>{children}</h1>
};

export default Heading;
