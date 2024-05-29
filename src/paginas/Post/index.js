import './Post.css'

import { Route, Routes, useLocation, useParams } from 'react-router-dom'
import posts from 'json/posts.json'
import PostModelo from 'componetes/PostModelo';
import Markdown from 'react-markdown';
import NaoEncontrada from 'paginas/NaoEncontrada';
import PaginaPadrao from 'componetes/PaginaPadrao';
import PostsSugeridos from 'componetes/PostsSugeridos';
import { useEffect } from 'react';
import ScrollToTop from 'componetes/ScrollToTop/ScrollToTop';

export default function Post(){
    const parametros = useParams();
    const post = posts.find( post => post.id === Number(parametros.id))
    const postsSugeridos = () => {
            let outrosPosts = posts.filter( post => post.id !== Number(parametros.id))
            return outrosPosts.slice(0,5)
    }

    if(!post) return <NaoEncontrada />
    

    return (
       <Routes>
            <Route path='*' element={<PaginaPadrao />}>
                <Route index element={
                    <>
                        <ScrollToTop />
                        <PostModelo
                            fotoCapa={`/assets/posts/${post.id}/capa.png`}
                            titulo={post.titulo}
                        >
                            <div className='post-markdown-container'>
                                <Markdown>
                                    {post.texto}
                                </Markdown>
                            </div>
                        </PostModelo>
                        <PostsSugeridos posts={postsSugeridos}/>
                    </>
                } />

            </Route>
       </Routes>
    )
}