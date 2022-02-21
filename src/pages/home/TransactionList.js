import { useFirestore } from '../../hooks/useFirestore';

//styles
import styles from './Home.module.css';

const TransactionList = ({ transactions }) => {
  const { deleteDocument, response } = useFirestore('transaction');
  console.log(response);

  return (
    <ul className={styles.transactions}>
      {transactions &&
        transactions.map((transaction) => (
          <li kry={transaction.id}>
            <p className={styles.name}>{transaction.name}</p>
            <p className={styles.amount}>$ {transaction.amount}</p>
            <button onClick={() => deleteDocument(transaction.id)}>x</button>
          </li>
        ))}
    </ul>
  );
};

export default TransactionList;
