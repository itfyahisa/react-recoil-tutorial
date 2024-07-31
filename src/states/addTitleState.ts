import { atom, selector } from "recoil";
import { Task } from "../types/task";

export const addTitleState = atom<Array<Task>>({
    key: "addTitleState",
    default: [],
});

// atomに対して操作をしたいときはselectorを使う
export const addTitleStateLength = selector<number>({
    key: "addTitleStateLength",
    get: ({ get }) => {
        const addTitleNumber: Array<Task> = get(addTitleState)
        return addTitleNumber?.length || 0
    },
})

