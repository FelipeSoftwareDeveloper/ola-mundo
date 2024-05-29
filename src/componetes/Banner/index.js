import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.png'

export default function Banner(){
    return (
       <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, amigo!
                </h1>
                <p className={styles.paragrafo}>
                    Seja bem-vindo ao meu portifólio! Eu sou Felipe Castro sou FullStack Developer tenho muita experiência com .NET Framework, trabalho com T.I. desde 2013 e exclussivamente com programação desde 2016.
                </p>
            </div>
            <div className={styles.imagens}>
                    <img 
                        className={styles.circuloColorido}
                        src={circuloColorido}
                        aria-hidden={true}
                        alt='Imagem de um circulo colorido'
                    />
                    <img 
                        className={styles.minhaFoto}
                        src={minhaFoto}
                        alt='Foto do Felipe sorrindo.'
                    />
                </div>
       </div>
    )
}