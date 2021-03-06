import React, { useState, useEffect, createContext } from 'react';
import { auth } from '../config/firebase';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // ログインしていればユーザー情報が入る/していなければnull

  // 処理のタイミング調整係
  // 今回はコンポーネントが初回描写されたあと(最初に一回だけコールバック関数が起動)
  useEffect(() => {
    // ユーザーのログイン状態を監視
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };

{
  /* <AuthContext.Provider value={user}>
	<h1>hello</h1>
</AuthContext.Provider>

children === <h1>hello</h1> */
}

// 純関数: 引数が同じなら必ず同じ値を返す関数
// 関数型プログラミング

const reducer = (state, action) => {
  switch (action.type) {
    case 'todos/todoadded':
      return {
        ...state,
        todo: action.payload,
      };
    case 'todos/delete':
      return {
        //delete
      };
  }
};
