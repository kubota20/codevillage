import React, { FC, useState } from 'react';

type Props = {
  addTodo?: (text: string) => void;
};

const Form: FC<Props> = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo?.(text); // optional chaining
  };
  return (
    <form onSubmit={handleSubmit}>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button>送信</button>
    </form>
  );
};

export default Form;
