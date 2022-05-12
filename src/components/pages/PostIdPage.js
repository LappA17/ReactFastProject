import React, {useEffect, useState} from 'react';
import useFetching from "../hooks/useFetching";
import PostService from "../API/PostService";
import Spinner from '../spinner/Spinner';

import { useParams } from 'react-router-dom';
//Мы можем выцепить айдишник из url и на основание его отправить запросс на сервер для получение поста по айди
//Что бы его вытащить нужен хук useParams
//После того как достали id идем в PostService

const PostIdPage = () => {

    const params = useParams() //в этом хуке будет айдишник
    const [post, setPost] = useState({})//сюда будем помещать то что вернет сервер по айдишнику(ниже)
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading] = useFetching( async(id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })
    const [fetchComments, isComLoading, comError] = useFetching( async(id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])

    return (
        <div>
            <h1>Вы открыли страницу поста с ID = {params.id}</h1>
            {isLoading
                ? <Spinner/>
                :<div>
                    {post.id}.{post.title}
                </div>}
            <h1>Комментарии</h1>
            {isLoading
                ? <Spinner/>
                :<div>
                    {comments.map(comm => 
                        <div key={comm.id} style={{marginTop: 15}}>
                            <h5>
                                {comm.email}
                            </h5>
                            <div>
                                {comm.body}
                            </div>
                        </div>
                    )}
                </div>}
            
        </div>
    );
};

export default PostIdPage;