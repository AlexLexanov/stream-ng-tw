import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class CategoriesService {
    categories = [
        {id: 1, title: 'Сейчас смотрят', films: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]},
        {id: 2, title: 'Популярные', films: [19, 20, 21, 22, 23, 24, 25, 26, 27]},
    ]

    getCategory(id: number | undefined): any {
        const category: any = this.categories.find(item => item.id === id)
        const size = 5
        const films = []
        for (let i = 0; i < Math.ceil(category.films.length / size); i++) {
            films[i] = category.films.slice((i * size), (i * size) + size);
        }
        return Object.assign({ title: category.title }, { films })
    }
}
