import { Link } from 'react-router-dom'
import styles from './Post.module.css'
import BotaoPrincipal from 'componetes/BotaoPrincipal'

export default function PostCard({ post, temBotao = true, tamanho }) {
    return (
       <Link to={`/post/${post.id}`}>
        <div className={`${styles.post} ${styles[tamanho]}`}>
            <img
                className={styles.capa}
                src={`/assets/posts/${post.id}/capa.png`}
                alt="Imagem da cada do post"
            />
            <h2 className={styles.titulo}>{post.titulo}</h2>
            { temBotao ? <BotaoPrincipal >Ler</BotaoPrincipal> : "" }
        </div>
       </Link>
    )
}