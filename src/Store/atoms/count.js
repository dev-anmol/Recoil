import { atom, selector } from "recoil";

//atom takes 1 parameter i.e object
//inside object there is key and default value
//recoil excepts a key for an atom for distinguish b/w other atoms, uniquely identify the atom
//default value is the initial value and it can be anything like empty value etc...

const countAtom = atom({
    key: "countAtom", 
    default: 0,
})

export default countAtom


//selector that depend only on countAtom and a selector can depend upon many things.
export const evenSelector = selector({
    key: "evenSelector",
    //get() is a function used to access the values of atoms or other sections.
    //inside get() provide the atom with which count derives from. i.e depends on the countAtom
    //a selector can also depend upon another selector
    get: ({get}) => {
        const count = get(countAtom);
        return count % 2;
    }
})
