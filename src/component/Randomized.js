import items from "./data/item.json";
export const Randomized = () => {
    // amount of items - 1
    // const main = 17;
    // const special = 14;
    // const tools = 6;
    // const melee = 3;
    const obj = Object.entries(items);
    const seed = []
    return (
        <div>
            <h2>Weapons</h2>
            {Object.keys(items).map((title, key) => {
                const currentItem = key
                return (
                    <div key={key}>
                        <h3>{title}</h3>
                        {Object.entries(obj[currentItem][1]).map((item, i) => {
                            return <div key={i}>{item[1].alt}</div>
                        })}
                    </div>
                );
            })}
        </div>
    );
}