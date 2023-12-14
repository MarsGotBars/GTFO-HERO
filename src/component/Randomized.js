import items from "./data/item.json";
import styles from "../styles/randomized.module.css"
export const Randomized = () => {
    // amount of items - 1
    // const main = 17;
    // const special = 14;
    // const tools = 6;
    // const melee = 3;
    const obj = Object.entries(items);
    const seed = []
    return (
        <>

            <div className={styles.screen}>
                <h2>Weapons</h2>
                {Object.keys(items).map((title, index) => {
                    const currentItem = index;
                    return (
                        <div className={styles.container} key={index}>
                            <div className={styles.title}>
                                <h3>{title}</h3>
                            </div>
                            <ul className={styles.box}>
                                {Object.entries(obj[currentItem][1]).map((item, i) => {
                                    return <li key={i}>{item[1].alt}</li>
                                })}
                            </ul>
                        </div>
                    );
                })}
            </div>

        </>
    );
}