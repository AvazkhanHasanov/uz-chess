import difficulty1 from '/src/assets/icons/difficulty1.svg'
import difficulty2 from '/src/assets/icons/difficulty2.svg'
import difficulty3 from '/src/assets/icons/difficulty3.svg'
import book1 from "/src/assets/images/book1.png"
import book2 from "/src/assets/images/book2.png"
import book3 from "/src/assets/images/book3.png"
import book4 from "/src/assets/images/book4.png"
import book5 from "/src/assets/images/book5.png"


export const books = [
    {
        id: 1,
        title: "Bobbi Fisher shaxmatni o‘ynashni o‘rganing",
        image: book1,
        price: 155000,
        hasDiscount: true,
        priceBeforeDiscount: 205000,
        author: "Robert Fisher",
        category: "Tarix",
        difficulty: "Boshlang‘ich",
        difficultyIcon: difficulty1,
        isLiked: false,
        rating: 3.5,
        language: "РУ"
    },
    {
        id: 2,
        title: "Bobbi Fisher shaxmatni o‘ynashni o‘rganing",
        image: book2,
        price: 180000,
        hasDiscount: false,
        priceBeforeDiscount: null,
        author: "Jonatan Dez",
        category: "Adabiyot",
        difficulty: "Havaskor",
        difficultyIcon: difficulty2,
        isLiked: false,
        rating: 4.7,
        language: "O‘z"
    },
    {
        id: 3,
        title: "Mening tizimim",
        image: book3,
        price: 0,
        hasDiscount: false,
        priceBeforeDiscount: null,
        author: "Andre Miladze",
        category: "Matematika",
        difficulty: "Havaskor",
        difficultyIcon: difficulty2,
        isLiked: true,
        rating: 5,
        language: "O‘z"
    },
    {
        id: 4,
        title: "Zurixdagi shaxmat musobaqasi",
        image: book4,
        price: 120000,
        hasDiscount: false,
        priceBeforeDiscount: null,
        author: "David Bronstein",
        category: "Tarix",
        difficulty: "Professional",
        difficultyIcon: difficulty3,
        isLiked: false,
        rating: 4.9,
        language: "РУ"
    },
    {
        id: 5,
        title: "Mening esdaqolarlik o‘yinlarim",
        image: book5,
        price: 189000,
        hasDiscount: true,
        priceBeforeDiscount: 209000,
        author: "Mikhail Litvin",
        category: "Matematika",
        difficulty: "boshlang'ich",
        difficultyIcon: difficulty1,
        isLiked: true,
        rating: 3.5,
        language: "O‘z"
    }

]