import React, {useEffect, useState, useRef } from "react";
//import Counter from "./Counter";

import '../../components/styles/App.css'
import PostList from '../PostList'
import PostForm from "../PostForm";
import PostFilter from "../PostFilter";
import MyModal from "../UI/myModal/MyModal";
import MyButton from "../UI/button/MyButton";
import {usePosts} from '../hooks/usePosts'
import PostService from '../API/PostService'
import Spinner from '../spinner/Spinner'
import useFetching from '../hooks/useFetching'
import getPageCount from '../utils/pages'
import Pagination from "../UI/pagination/Pagination";

function Posts() { 

    const [posts, setPosts] = useState([
        {id:1, title: 'JavaScript', body:'Best for start'},
        {id:2, title: 'TypeScript', body:'Best for big guys'},
        {id:3, title: 'React', body:'Best for the best'}
    ])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0)//общее кство постов
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query )

    const [fetchPosts, isPostsLoading, postError] = useFetching(async() => {
        const response = await PostService.getAll(limit, page)
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })

    console.log(totalPages)
    useEffect(() => {
        fetchPosts()
    }, [page])

    //получаем newPоst из дочернего компонента
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    //получаем пост из дочернего компонента
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page)
        //fetchPosts() //вызываем эту фцию что бы передать нужные нам лимиты и номер страницы. Закомментировали потому что передали page в useEffect
    }

    return (
        <div className="App">
            <button onClick={fetchPosts}>Get Posts</button>
            <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
                Создать пользователя
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: '15px 0'}}/> 
            <PostFilter 
                filter={filter}
                setFilter={setFilter}/>
            {postError && <h1>Произошла ошибка ${postError} </h1> } 

            <PostList 
                    remove={removePost} 
                    posts={sortedAndSearchedPosts}
                    title='Посты про JS'/>

            {isPostsLoading //проверям или лоудинг в тру что бы отобразить крутилку
             && //что бы Спинер не перетерал список постов
             <Spinner/> }

            <Pagination 
                page={page} 
                changePage={changePage} 
                totalPages={totalPages} 
            />
            {/*<PostList posts={posts2} title='Посты про Python'/> Обрати внимание что posts2 тем же Пропсом передается*/}
        </div>
    )
}