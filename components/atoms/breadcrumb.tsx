import React from 'react';

const Breadcrumb = (props: { children: JSX.Element[] }) => {
  const childrenArray = React.Children.toArray(props.children);

  console.log(childrenArray);

  const childrenWithSeparator = childrenArray.map((child, index) => {
    if (index !== childrenArray.length - 1) {
      console.log(child);
      return (
        <React.Fragment key={index}>
          {child}
          <span>{`/`}</span>
        </React.Fragment>
      );
    }
    return child;
  });

  console.log('childrenWithSeparator', childrenWithSeparator);

  return (
    <nav className=''>
      <ol className='flex items-center text-sm'>{childrenWithSeparator}</ol>
    </nav>
  );
};

export default Breadcrumb;
