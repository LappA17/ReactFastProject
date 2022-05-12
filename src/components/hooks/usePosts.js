import { useMemo } from "react"

export const useSortedPosts = (posts, sort) => { //посты и метод сортировки
    //от фильтра можно уже избавиться
    const sortedPosts = useMemo(() => {
        if(sort) { //если тут не пустая строка, помни что '' по дефолту false
            return [...posts].sort((a,b) => a[sort].localeCompare(b[sort])) //переносим механизм сортировки сюда
        }
        return posts
    }, [sort, posts])

    return sortedPosts
}

//будет возвращать и отфилтрованынй и отсортированный массив
export const usePosts = (posts, sort, query) => {//посты, метод сортировки и поисковую строку
    const sortedPosts = useSortedPosts(posts, sort)
    const sortedAndSearchedPosts = useMemo(() => {
        //по поисковой строке отфильтруем массив
        return sortedPosts.filter(post => post.title.includes(query.toLowerCase()))
    }, [query, sortedPosts])

    return sortedAndSearchedPosts
}