import Cart from './components/Cart'
import data from './info';
import styles from './app.module.css';

function App() {

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.header}>
          Зроби це зараз! 21 чудовий спосіб зробити більше за менший час
        </h1>
        <h2 className={styles.header2}>
          Не витрачайте час даремно. Успіх приходить до тих хто вміє
          концентруватись на головному, долати прокрастинацію та діяти
          дисципліновано!
        </h2>
        <div className={styles.wrapper}>
          {data.map((el) => (
            <Cart key={el} name={el.name} description={el.description} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App
