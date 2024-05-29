import PostCard from 'componetes/PostCard'
import styles from './PostsSugeridos.module.css'

export default function PostsSugeridos({posts}){
    return (
        <>
            <h1>Posts que achamos que você vai gostar</h1>
            <div className={styles.sugeridosContainer}>
                <ul className={styles.posts}>
                    {posts().map( post => (
                            <li key={post.id}>
                                <PostCard 
                                    temBotao={false} 
                                    post={post} 
                                    tamanho="sm"
                                />
                            </li>
                        )
                    )}
                </ul>
            </div>
        </>
    )
}