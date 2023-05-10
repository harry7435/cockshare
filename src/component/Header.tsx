import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerTitle}>
        <Link to="/">
          <span>콕쉐어 민턴번개</span>
        </Link>
      </div>
      <div className={styles.headerMenu}>
        <Link to="board-list">번개게시판</Link>
        <Link to="add-board">글쓰기</Link>
        <Link to="/login">로그인</Link>
        <Link to="/sign-up">회원가입</Link>
      </div>
    </div>
  );
};

export default Header;
