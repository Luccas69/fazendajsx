import styles from "./styles.module.css";
import Image from "next/image";
import uvas from "@/Components/img/uvas.png";
import bois from "@/Components/img/bois.png";
import laranjas from "@/Components/img/laranjas.png";
import ovelhas from "@/Components/img/ovelhas.png";
import galinha from "@/Components/img/galinha.png";
import tomate from "@/Components/img/tomate.png";
import alface from "@/Components/img/alface.png";

export default function Card() {
    return (
      <div>
        <div className={styles.container}>
          <div className={styles.containerimagem}>
            <Image src={uvas} alt="produção de uvas" />
            <div className={styles.imageText}> Produção de Uvas</div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
              nam nisi numquam facilis voluptatum veniam nihil dolorem. Laudantium
              voluptatum natus, aperiam, culpa quisquam veritatis aut sapiente sed
              tempore debitis maxime.
            </p>
            <button className={styles.botao}>
              <p>Saiba Mais</p>
            </button>
          </div>
  
          <div className={styles.containerimagem}>
            <Image src={bois} alt="Gado de Corte" /><div className={styles.imageText}>Gado de Corte</div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
              nam nisi numquam facilis voluptatum veniam nihil dolorem. Laudantium
              voluptatum natus, aperiam, culpa quisquam veritatis aut sapiente sed
              tempore debitis maxime.
            </p>
            <button className={styles.botao}>
              <p>Saiba Mais</p>
            </button>
          </div>
  
          <div className={styles.containerimagem}>
            <Image src={laranjas} alt="Produção de Laranja" /><div className={styles.imageText}> Produção de Laranja</div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
              nam nisi numquam facilis voluptatum veniam nihil dolorem. Laudantium
              voluptatum natus, aperiam, culpa quisquam veritatis aut sapiente sed
              tempore debitis maxime.
            </p>
            <button className={styles.botao}>
              <p>Saiba Mais</p>
            </button>
          </div>
        </div>
  
        <div className={styles.container}>
          <div className={styles.containerimagem}>
            <Image src={ovelhas} alt="Caprinos" /><div className={styles.imageText}>Caprinos</div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
              nam nisi numquam facilis voluptatum veniam nihil dolorem. Laudantium
              voluptatum natus, aperiam, culpa quisquam veritatis aut sapiente sed
              tempore debitis maxime.
            </p>
            <button className={styles.botao}>
              <p>Saiba Mais</p>
            </button>
          </div>
  
          <div className={styles.containerimagem}>
            <Image src={galinha} alt="Produção de Ovos" /><div className={styles.imageText}>Produção de Ovos</div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
              nam nisi numquam facilis voluptatum veniam nihil dolorem. Laudantium
              voluptatum natus, aperiam, culpa quisquam veritatis aut sapiente sed
              tempore debitis maxime.
            </p>
            <button className={styles.botao}>
              <p>Saiba Mais</p>
            </button>
          </div>
  
          <div className={styles.containerimagem}>
            <Image src={tomate} alt="Produção de tomate" /><div className={styles.imageText}>Produção de tomate</div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
              nam nisi numquam facilis voluptatum veniam nihil dolorem. Laudantium
              voluptatum natus, aperiam, culpa quisquam veritatis aut sapiente sed
              tempore debitis maxime.
            </p>
            <button className={styles.botao}>
              <p>Saiba Mais</p>
            </button>
          </div>
        </div>
  
        <div className={styles.container}>
          <div className={styles.containerimagem}>
            <Image src={alface} alt="Hortifruti" /><div className={styles.imageText}>Hortifruti</div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
              nam nisi numquam facilis voluptatum veniam nihil dolorem. Laudantium
              voluptatum natus, aperiam, culpa quisquam veritatis aut sapiente sed
              tempore debitis maxime.
            </p>
            <button className={styles.botao}>
              <p>Saiba Mais</p>
            </button>
          </div>
        </div>
      </div>
    );
  }
  