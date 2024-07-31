import React, { useCallback, useState } from 'react'
import "./InputTask.css";
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { inputTitleState } from '../states/inputTitleState';
import { addTitleState } from '../states/addTitleState';

const InputTask = () => {

    // コンポーネント状態管理 useState
    // const [inputTitle, setInputTitle] = useState("first title input")
    // inputTask内のコンポーネントでしか使えない、propsで渡せば使えるけど大規模な開発になると大変    

    //グローバル状態管理ライブラリ useRecoil
    // const inputTitle = useRecoilValue(inputTitleState) key 取得
    // const setInputTitle = useSetRecoilState(inputTitleState) 更新
    // コンポーネントに依存しない場所で受け渡しすることができる

    //useStateみたいな書き方ができる
    const [inputTitle, setInputTitle] = useRecoilState(inputTitleState)
    const [addTitle, setAddTitle] = useRecoilState(addTitleState)

    //ランダムな少数を生成し基数32の文字列の先頭２文字(0.)を削除する.
    const getKey = () => Math.random().toString(32).substring(2)
    console.log(getKey)

    const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setInputTitle(event.target.value)
        console.log(inputTitle)
    }, [inputTitle])
    // パフォーマンス化のために初回のみ処理を実行して
    // ２回目以降は前回の処理結果を研鑽することなく呼び出し値を得られるようにする

    const handleClick = () => {
        setAddTitle([...addTitle, { id: getKey(), title: inputTitle }])
        setInputTitle("")
        console.log(addTitle)
    }

    return (
        <div className="inputField">
            <input type="text" className='inputTitle' onChange={onChange} value={inputTitle} />
            <button type='button' className='addButton' onClick={handleClick}>追加</button>
        </div>
    )
}

export default InputTask