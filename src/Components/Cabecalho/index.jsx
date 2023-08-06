import Image from "next/image"
import styles from "./styles.module.css"
import mato from '../img/mato.png'

export default function Cabecalho(){

    return (
        <header className={styles.container}>
            <Image src={mato} alt="imagem cabeçalho" className="imagem-grande"/>
            <div className={styles.texto}>
                <h1>Fazenda Orgânica</h1>
            </div>
        </header>
    )
}