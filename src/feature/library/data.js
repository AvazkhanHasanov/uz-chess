import difficulty1 from '/src/assets/icons/difficulty1.svg'
import difficulty2 from '/src/assets/icons/difficulty2.svg'
import difficulty3 from '/src/assets/icons/difficulty3.svg'
import book1 from "/src/assets/images/book1.png"
import book2 from "/src/assets/images/book2.png"
import book3 from "/src/assets/images/book3.png"
import book4 from "/src/assets/images/book4.png"
import book5 from "/src/assets/images/book5.png"

import img1 from "/src/assets/images/img1.png"
import img2 from "/src/assets/images/img2.png"
import img3 from "/src/assets/images/img3.png"
import img4 from "/src/assets/images/img4.png"

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
export const course = [
    {
        id: 1,
        title: "Shaxmat donalari bilan tanishuv",
        image: img1,
        price: 96000,
        hasDiscount: true,
        priceBeforeDiscount: 205000,
        author: "Robert Fisher",
        category: "Strategiya",
        difficulty: "Boshlang`ich",
        numberOfLesson: 5,
        difficultyIcon: difficulty1,
        isLiked: true,
        rating: 3.5,
        language: 'PY'
    },
    {
        id: 1,
        title: "Shoxga hujum qilish",
        image: img2,
        price: 96000,
        hasDiscount: true,
        priceBeforeDiscount: null,
        author: "Andre Konfutsiy",
        category: "Hujum qilish",
        difficulty: "Boshlang`ich",
        numberOfLesson: 8,
        difficultyIcon: difficulty1,
        isLiked: false,
        rating: 5.0,
        language: 'O‘z'
    },
    {
        id: 1,
        title: "Mot qilish",
        image: img3,
        price: 107000,
        hasDiscount: true,
        priceBeforeDiscount: 160000,
        author: "David Harikon",
        category: "Himoyalanish",
        difficulty: "Professional",
        numberOfLesson: 4.5,
        difficultyIcon: difficulty3,
        isLiked: true,
        rating: 3.5,
        language: 'PY'
    },
    {
        id: 1,
        title: "Shaxmat donalari bilan tanishuv",
        image: img4,
        price: 96000,
        hasDiscount: true,
        priceBeforeDiscount: 205000,
        author: "Asosiy taktikalar",
        category: "Qoidalar",
        difficulty: "Havaskor",
        numberOfLesson: 7,
        difficultyIcon: difficulty2,
        isLiked: true,
        rating: 5.0,
        language: 'PY'
    },

]