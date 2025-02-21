import styles from './cart.module.css';
// eslint-disable-next-line react/prop-types
const Cart = ({ name, description }) => {
  return (
    <div className={styles.cart}>
      <h2 className={styles.header}>{name}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  )
}

export default Cart;