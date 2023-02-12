import React from 'react'

const Breadcrumb = (props:any) => {
    const childrenArray = React.Children.toArray(props.children);

    console.log(childrenArray);


    const childrenWithSeparator = childrenArray.map((child, index) => {
    if (index !== childrenArray.length - 1) {
      return (
        <React.Fragment key={index}>
          {child}
          <span>/</span>
        </React.Fragment>
      );
    }
    return child
  });

  return (
    <nav className='mx-8 md:mx-16 lg:mx-32 mt-8'>
      <ol className='flex items-center space-x-4'>{childrenWithSeparator}</ol>
    </nav>
  );
}

export default Breadcrumb