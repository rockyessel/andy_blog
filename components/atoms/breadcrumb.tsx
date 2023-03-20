import React from 'react';

const Breadcrumb = (props: { children: JSX.Element[] }) => {
  const childrenArray = React.Children.toArray(props.children);

  const childrenWithSeparator = childrenArray.map((child, index) => {
    if (index !== childrenArray.length - 1) {
      return (
        <React.Fragment key={index}>
          {child} 
          <span>{`/`}</span>
        </React.Fragment>
      );
    }
    return child;
  });

  return (
    <nav className=''>
      <ol className='flex items-center text-sm'>{childrenWithSeparator}</ol>
    </nav>
  );
};

export default Breadcrumb;
