import React, {useEffect, useRef} from 'react';

//ref = элемент за которым нужно наблюдать
//canLoad = page < totalPages
//isLoading = isPostLoading
//callback = setPage(page + 1)
const useObserver = (ref, canLoad, isLoading, callback,) => {
  //будем инициализировать Observer. Весь фционал скопировали с АПИ и внесем изменение

  const observer = useRef()
  useEffect(() => {
    if (isLoading) return
    if (observer.current) observer.current.disconnect()
    var cb = function(entries, observer) {
        //у нас console.log('ДИВ В ЗОНЕ ВИДИМОСТИ') срабатывает и когда заходит в обл видимости и когда из нее выходим и что бы это исправить нужно поработать с аргумнетом entries
        if (entries[0].isIntersecting && canLoad) { //так будет появлять только в зоне видимости ,а на ИСЧЕЗАНИЕ нет
            //console.log('ДИВ В ЗОНЕ ВИДИМОСТИ')
            callback()
        }
        
    };
    observer.current = new IntersectionObserver(cb);

    //укажем за каким элементом будем наблюдать с помощью фции observe у observer и туда передаем ДОМ элемент
    observer.current.observe(ref.current)
}, [isLoading]) //у нас всегда номер текущей страницы 1, потому что useEffect отработал у нас лишь один раз, observer создался единаждый и вот этот callback замкнул в себе 1цу и не смотря на то что мы изменяем состояние - внутри callbека по прежнему номер страницы замкнут как единица, что бы это исправить в массив зависимостей передадим isPostsLoading и каждый раз будем создавать новый обсервер с новым коллбеком, который замкнул в себе уже новое состояние. Но если так сделать то у нас старый обсервер не удаляется а к нему добавляются новые и происходит очень много перерендерингов по-этому создадим условие. Если isPostLoading в true то мы делаем return и до Обсервера даже не доходим, а во вторых мы делаем проверку что если observer уже создан и в поле current что-то находится то тогда мы должны отключить наблюдение за всеми элементами за которыми наблюдает обсервер в текущий момент вызывая фцию disconnect. А это page < totalPages мы сделали что бы коллбек отрабатывал только тогда когда номер текущей страницы меньше всех иначе так будут увеличиваться до бессконечности
};

export default useObserver;

