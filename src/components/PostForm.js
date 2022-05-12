import React, {useState} from 'react';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';

/*Пропсы всегда жолжны идти сверху вниз, те от Апп и ниже. 
  Но сейчас у нас есть Компонент PostForm, который должен создать форму и передать её в Апп 
  Передача пропсов от ребенка до родителя - невозможная !
  Но есть фция обратного вызова - callback, которая нам поможет */
  
const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})
    //const [title, setTitle] = useState('')
    //const [body, setBody] = useState()

    //const bodyInputRef = useRef()

    const addNewPost = (e) => {
        e.preventDefault()//потому что у кнопки по-дефолту стоит type="submit" и после нажатие данные отправляются на сервер
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
        
    }

    return (
        <form >
            <MyInput 
                type="text" 
                placeholder="Название поста"
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})} /> {/* Мы изменяем нужное нам поле, а остальной Объект нет!*/}
            <MyInput 
                type="text" 
                placeholder="Название поста"
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})} />
            {/* Управляемый Компонент */}
            {/* <MyInput 
                type="text" 
                placeholder="Название поста"
                value={title}
                onChange={e => setTitle(e.target.value)} />
            <MyInput 
                type="text" 
                placeholder="Название поста"
                value={body}
                onChange={e => setBody(e.target.value)}/> */}
            {/* Неуправляемый Компонент. К примеру мы не можем здесь очищать инпут после создания поста 
            <MyInput 
                type="text" 
                placeholder="Описание поста"
                ref={bodyInputRef}/> */}
            <MyButton onClick={addNewPost}>Создать Пост</MyButton>
        </form>
    );
};

export default PostForm;