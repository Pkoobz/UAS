import React from 'react';

function MyLink(props) {
  function handleClick() {
    console.log('Link clicked!');
  }

  return (
    <a href={props.href} onClick={handleClick}>
    </a>
  );
}

export default MyLink;
