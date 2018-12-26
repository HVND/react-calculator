import React from 'react';
import classNames from 'classnames';

function Button(props) {
  const className = classNames('button', props.button.classes);

  return <button className={className} onClick={() => props.onAction(props.button)}>{props.button.name}</button>;
}

export default Button;
