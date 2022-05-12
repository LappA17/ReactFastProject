import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import MyButton from './UI/button/MyButton';

const PostItem = (props) => {

    const router = useHistory()//Хук для переходов на другие страницы
    //У этого Хука есть несколько методов, к примеру метод push

    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <MyButton onClick={() => router.push(`/posts/${props.post.id}`)}>
                Открыть
            </MyButton>
            <MyButton onClick={() => props.remove(props.post)}> {/*У этого поста будет айдишник и по-этому айдишнику пост будет удален из массива */}
                Удалить
            </MyButton>
        </div>
    );
};

export default PostItem;