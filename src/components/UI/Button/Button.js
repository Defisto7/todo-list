import React from 'react';

import s from'./Button.module.css';

const Button = props => {
  return (
    <button type={props.type} className={s.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
