// const coding = ["js","ruby","java","python","cpp"]

// const values = coding.forEach((item) => {
//     console.log(item);
//     return item
// })
// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]

// Filter
// const newNums = myNums.filter((num) => num > 4)

// const newNums = myNums.filter((num) => {
//     return num > 4
// })

// const newNums = []

// myNums.forEach((num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// })

// console.log(newNums);

const books = [
    { title: "The Silent Sea", genre: "Thriller", publish: 2018, edition: "First", writer: "James Harper" },
    { title: "Echoes of the Past", genre: "Historical Fiction", publish: 2015, edition: "Second", writer: "Eleanor Brooks" },
    { title: "Cyber Shadows", genre: "Sci-Fi", publish: 2022, edition: "First", writer: "Liam Carter" },
    { title: "Whispering Pines", genre: "Mystery", publish: 2017, edition: "Third", writer: "Sophia Bennett" },
    { title: "The Lost Heir", genre: "Fantasy", publish: 2019, edition: "First", writer: "Oliver Gray" },
    { title: "Moonlit Serenade", genre: "Romance", publish: 2016, edition: "Second", writer: "Emma Sinclair" },
    { title: "Beyond the Horizon", genre: "Adventure", publish: 2020, edition: "First", writer: "Nathaniel Hayes" },
    { title: "Parallel Worlds", genre: "Sci-Fi", publish: 2021, edition: "First", writer: "Isabella Frost" },
    { title: "Secrets in the Fog", genre: "Mystery", publish: 2014, edition: "Fourth", writer: "Benjamin Cole" },
    { title: "The Crimson Dagger", genre: "Fantasy", publish: 2018, edition: "First", writer: "Charlotte Reid" },
    { title: "Broken Reflections", genre: "Drama", publish: 2013, edition: "Third", writer: "Henry Dawson" },
    { title: "Galactic Voyagers", genre: "Sci-Fi", publish: 2023, edition: "First", writer: "Alex Nova" },
    { title: "Shattered Truths", genre: "Thriller", publish: 2017, edition: "Second", writer: "Madeline Pierce" },
    { title: "The Enchanted Quill", genre: "Fantasy", publish: 2015, edition: "First", writer: "Evelyn Hart" },
    { title: "Desert Mirage", genre: "Adventure", publish: 2019, edition: "Second", writer: "Julian Drake" },
    { title: "Celestial Prophecy", genre: "Sci-Fi", publish: 2021, edition: "First", writer: "Victoria Hale" },
    { title: "Veil of Deception", genre: "Mystery", publish: 2016, edition: "Third", writer: "Andrew Fox" },
    { title: "The Final Countdown", genre: "Thriller", publish: 2020, edition: "First", writer: "Zoe Richardson" },
    { title: "Timeless Echoes", genre: "Historical Fiction", publish: 2012, edition: "Fourth", writer: "Lucas Montgomery" },
    { title: "Starlit Dreams", genre: "Romance", publish: 2018, edition: "Second", writer: "Grace Bennett" }
  ];


// const userBooks = books.filter((bk) => bk.genre === 'Thriller')

let userBooks = books.filter((bk) => {
    return bk.publish >= 2000 && bk.genre == "Adventure"
})

console.log(userBooks);
