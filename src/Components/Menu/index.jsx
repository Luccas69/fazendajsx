import styles from './styles.module.css'
import Link from "next/link";

export default function Menu(){
   
    return(
        <ul className={styles.menu}>
             <li>
                <Link href="/">Inicio</Link>
            </li> 
            <li>
                <Link href="/produtos">produtos</Link>
            </li>
            <li>
                <Link href="/quemsomos">Quem somos</Link>
            </li>
        </ul>
    )
}