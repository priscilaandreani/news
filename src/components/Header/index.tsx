import styles from './styles.module.scss';

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src='/images/logo.svg' alt='ig.news' />
        <nav>
          <a className={styles.active} href='#'>
            Home
          </a>
          <a href='#'>Posts</a>
        </nav>
        <button type='button'>
          <img src='/images/avatar.svg' alt='Avatar' />
        </button>
      </div>
    </header>
  );
}
