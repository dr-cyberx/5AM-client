import React from 'react';
import Typewriter from 'typewriter-effect';

interface iTypewritter {
  optionArray: string[];
  autoStart: boolean;
  loop: boolean;
}

const Typewritter: React.FunctionComponent<iTypewritter> = ({
  optionArray,
  autoStart,
  loop,
}): JSX.Element => {
  return (
    <>
      <Typewriter
        options={{
          strings: [...optionArray],
          autoStart,
          loop,
          delay: 50,
        }}
      />
    </>
  );
};

export default Typewritter;
