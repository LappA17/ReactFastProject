import React from 'react';
import cl from './MyModal.module.css'

//что бы помещать в это модальное окно всё что захотим существует пропс Чилдрен
//visible, setVisible - будут регулировать показывать ли мод окно или скрывать
const MyModal = ({children, visible, setVisible}) => {

    const rootClasses = [cl.myModal]
    
    if (visible) {
        rootClasses.push(cl.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)} >
            <div className={cl.myModalContent} onClick={(e) => {e.stopPropagation()}}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;

/*[cl.MyModal, cl.active.join](' ') - тут мы пишем фционал по вскрытию и показыванию модельного окна. Создаем массив, добавляем два
класса и заджонить его по пробелу(джоин вернет строку)  */

/*onClick={() => setVisible(false)} что бы при нажатие вне мод окна оно закрывалось
  onClick={(e) => {e.stopPropagation()}} что бы при нажатие на контент мод окно не закрывалось */