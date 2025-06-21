import type { IBook } from "../Model/IBook";
import BookList from "../component/BookList/BookList";

const books: IBook[] = [
    { title: "Майстер і Маргарита", author: "Михайло Булгаков" },
    { title: "Кобзар", author: "Тарас Шевченко" },
    { title: "1984", author: "Джордж Орвелл" },
    { title: "Гаррі Поттер і філософський камінь", author: "Джоан Ролінґ" },
    { title: "Тіні забутих предків", author: "Михайло Коцюбинський" }
];

const Library = () => {
    return (
        <main className="page">
            <BookList books={books} />
        </main>
    )
};

export default Library;
