import { useAuthContext } from '../../hooks/useAuthContext';
import { useCollection } from '../../hooks/useCollection';

//components
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';

// styles
import styles from './Home.module.css';

export default function Home() {
  const { user } = useAuthContext();
  const { documents, error } = useCollection(
    'transaction',
    ['uid', '==', user.uid],
    ['createdAt', 'desc']
  );
  console.log(documents);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {error && <p>{error}</p>}
        {documents && <TransactionList transactions={documents} />}
      </div>
      <div className={styles.sidebar}>
        <TransactionForm uid={user.uid} />
      </div>
    </div>
  );
}
