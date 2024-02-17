// 定义接口，限制person对象的类型
//export暴露接口，供其他文件使用
export interface PersonInter {
    id:string,
    name:string,
    age:number
}

// 自定义类型
//export type Persons = Array<PersonInter>
export type Persons = PersonInter[]
