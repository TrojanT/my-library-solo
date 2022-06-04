export interface IAuthor {
    name: string
}

export interface IBook {
    title: string
    price: string
    author: IAuthor
}

export interface SelectAuthorOption {
    value: IAuthor
    label: string
}
