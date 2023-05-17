/* eslint-disable*/

import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';

import styled from './Nav.module.css';

export default function Nav() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <nav className={styled.nav}>
      <h1 className={styled.tit}>
        <Link to="/">Cock Share</Link>
      </h1>
      <ul className={styled.list_nav}>
        {!user && (
          <>
            <li>
              <Link to="/login">로그인</Link>
            </li>
            <li>
              <Link to="/signup">회원가입</Link>
            </li>
          </>
        )}
        {user && (
          <li>
            <strong>{user.displayName}님 환영합니다.</strong>

            <button type="button">
              <Link to="/input">번개 글작성</Link>
            </button>
            <button type="button" onClick={logout}>
              로그아웃
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}
