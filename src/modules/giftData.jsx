import { Link } from "react-router-dom";

const GiftData = () => {

    /* option base */
    const externList = "https://docs.google.com/spreadsheets/d/1Tupw1SSHgd62g_tkZuFjWf_XOVj1YNxBDwbh9IkzDOc/edit#gid=0";

    const optionBase = (
        <div>
            <a href={externList} target="_blank"> {/*este link lleva a lista de google sheets */}
                <button>Aqui</button>
            </a>
        </div>
    );

    const optionClassic = (
        <div>
            <Link to="/gifts">Aqui</Link> {/* lista externa */}
        </div>
    )

    const optionGold = (
        <div>
            <Link to="/gifts-list">Aqui</Link> {/* dashboard de base de datos */}
        </div>
    )

    return (
        <>
            <div>
                
            <p>Conoce la lista de los regalos que hemos seleccionado</p>

            {optionBase}

            {optionClassic}

            {optionGold}

            </div>

        </>
    )
}

export default GiftData;



// En este modulo queremos que:
// opcion base:
// dirija a una lista de regalos externa, sea un excel o de alguna tienda

// opcion classic:
// dirija a una view con la lista cargada en Client

// opcion gold:
// dirija a giftList dashboard para guests
