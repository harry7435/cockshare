import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.homeWrapper}>
      <div className={styles.homeTitle}>
        <span>콕쉐어</span>에 오신걸 환영합니다
      </div>
      <div className={styles.homeContents}>
        자유롭게 번개 게시판에 번개 글을 작성하고 📝
        <br />
        <br />
        댓글로 배드민턴을 칠 사람들을 모아보세요 🏸
      </div>
      <div className={styles.aboutProject}>
        이 프로젝트는
        <br />
        <span>React</span>로 만들었습니다😎
      </div>
      <div className={styles.myWebsite}>
        <div className={styles.myWebsiteTitle}>Ikjun's Cockshare</div>
        <a href="https://github.com/harry7435/cockshare" target="_blank">
          🏴 GitHub
        </a>
        <a href="https://jun2-info-life.tistory.com/" target="_blank">
          📖 Tistory
        </a>
      </div>
    </div>
  );
};
export default Home;
