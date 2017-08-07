/**
 * Created by Maxis on 06.08.2017.
 */
var postData =
{
    "categoryTitle": "Все материалы категории Новости",
    "moreTitle": "Подробнее...",
    "published": "Опубликовано:",
    "allNewsTitle": "Все новости",
    "otherNewsTitle": "Интересное в других категориях",
    "postPrev": [
        {
            "thumb": "images/u113.png",
            "pic": "images/lasts/pic2.png",
            "pubDate": "6 июля 2017",
            "title": "Название новости, рекомендуемой длины не больше двух строк",
            "link": "#",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet."
        },
        {
            "thumb": "images/u113.png",
            "pic": "images/lasts/pic2.png",
            "pubDate": "6 июля 2017",
            "title": "Название новости, рекомендуемой длины не больше двух строк",
            "link": "#",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet."
        },
        {
            "thumb": "images/u113.png",
            "pic": "images/lasts/pic2.png",
            "pubDate": "6 июля 2017",
            "title": "Название новости, рекомендуемой длины не больше двух строк",
            "link": "#",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet."
        }
    ],
    "categories": [
        {
            "name": "Мероприятия",
            "link": "#"
        },
        {
            "name": "Встречи и события",
            "link": "#"
        },
        {
            "name": "Происшествия",
            "link": "#"
        },
        {
            "name": "Профилактические работы",
            "link": "#"
        }
    ],
    "popularPosts": {
        "title": "Популярное за неделю",
        "periods": [
            "За неделю",
            "За месяц"
        ]
    },
    "sort": {
        "title": "Сортировка по дате:",
        "types": [
            "Новые в начале",
            "Старые в начале"
        ]
    },
    "pagination": {
        "next": "Следующая",
        "prev": "Предыдущая",
        "active": "1",
        "pages": [
            "1",
            "2",
            "3",
            "4",
            "5"
        ]
    }

};

$.extend( true, data, postData );