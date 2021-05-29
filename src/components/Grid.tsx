import React from 'react';

export default function Grid({className, children}: React.PropsWithChildren<{className: string}>): React.ReactElement {
  return(
    <div className={`grid ${className}`}>      
      {children}
    </div>           
  );
};