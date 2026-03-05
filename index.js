// // console.log("Lession Connected");

// const lessonData = () => {
//     const url = 'https://openapi.programming-hero.com/api/levels/all'
//     fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//         lessonDisplay(data.data);
        
//     })
// }
// const lessonDisplay = (lessons) => {
    
//     const LessonBtnContainer = document.getElementById("Lesson-btn-container");
//     // console.log(LessonBtnContainer);
//     LessonBtnContainer.innerHTML = " ";
    
//     for ( const lesson of lessons){
//         const newButton = document.createElement("button");
//         newButton.innerHTML = `
//             <button onclick="showallWord(${lesson.level_no})" class="btn outline-1 btn-secondary"><i class="fa-solid fa-book-open"></i> Lesson - ${lesson.level_no}</button>
//         `
//         LessonBtnContainer.appendChild(newButton);
        
        
//     }
// }
//  const showallWord = (id) => {
//     const url = `https://openapi.programming-hero.com/api/level/${id}`
//     fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//         showallWordDisplay(data.data);
        
//     })
//  }
//  const showallWordDisplay = (words) => {
//     const allWordContainer = document.getElementById("all-word-container");
//     // console.log(allWordContainer);
//     allWordContainer.innerHTML = " ";
    
//     if ( words.length == 0 ){
//         // alert('Pl! next Page')
//         allWordContainer.innerHTML = `   <div class="text-center grid col-span-full">
//             <h1>No Data One More </h1>
//             <p>Plz!! Return Next page in the finoud Out</p>
//         </div> `;
//         return;
//     }
    
//     for( const word of words ){
//        const newDiv = document.createElement('div')
       
//        newDiv.innerHTML = `

//         <div class="bg-white p-6 rounded-xl  text-center">
//             <h1>${word.word}</h1>
//             <p>${word.meaning}</p>
//             <p>${word.pronunciation}</p>
//             <div class="flex justify-between items-center">
//                 <span class="btn"><i class="fa-solid fa-circle-info"></i></span>
//                 <span class="btn"><i class="fa-solid fa-volume-high"></i></i></span>
//             </div>
//         </div>


//        `
//        allWordContainer.appendChild(newDiv);
        
//     }
//  }

// lessonData();


const lessonData = () => {
    const url = "https://openapi.programming-hero.com/api/levels/all"
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        lessionDisplay(data.data);
        
    })
}

 const removeActiveBtn = () => {
    const lessionBtns = document.querySelectorAll(".lesson-btn");
    //jehetu amra button gula ke pacci tai loop calaye active class remove kore dite hbe.
    lessionBtns.forEach((btn) => {
        btn.classList.remove("active");
    })
    
 }

//lession button dispaly te show
 const lessionDisplay = (lessions) => {
    // jeikhne button gula rakhbo
    const btnContainer = document.getElementById("btn-Container")
    // console.log(btnContainer);
    btnContainer.innerHTML = " ";
    
    lessions.forEach((lession) => {
    // New button div create
    const newBtn = document.createElement("button");
    newBtn.innerHTML = `
        <div>
            <button id="lession-btn-${lession.level_no}" onclick="loadbtn(${lession.level_no})" class="btn outline-1 lesson-btn "><i class="fa-solid fa-book"></i> Lesson - ${lession.level_no}<button>
        </div>
    `
        btnContainer.appendChild(newBtn)      
    }) 
 }

 const loadbtn = (id) => {
    
    const url = `https://openapi.programming-hero.com/api/level/${id}`
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        const clickBtn = document.getElementById(`lession-btn-${id}`);
        removeActiveBtn();
        // console.log(clickBtn);
        clickBtn.classList.add("active")
        loadWord(data.data);
        
    }) 
 }
 // loadBtn e display te show korate hbe
 const loadWord = (words) => {
    //Jeikhne Rakhbo
    const wordContainer = document.getElementById("word-Container");
    wordContainer.innerHTML = " ";
    // console.log(wordContainer);
    if ( words.length == 0){
       wordContainer.innerHTML = `
        
    <div class="text-center col-span-full bg-white p-10 rounded-md space-y-3">
          <img class="w-[100px] mx-auto" src="./images/pngtree-attention-security-alert-illustration-png-image_4548851.jpg" alt=""> 
        <h2 class="text-4xl"> Read More Next Page </h2>
        <p class="text-2xl">Plz! Return The Next Page</p>
    </div>
       `;
        return;
    }
    
    words.forEach((word) => {
       
        const newDiv = document.createElement("div")
        newDiv.innerHTML = `
        
            <div class="bg-white text-center p-10   space-y-3 rounded-md">
            <p class="text-3xl font-bold">${word.word}</p>
            <p class="text-xl font-extralight">${word.meaning}</p>
            <p class="text-2xl ">${word.pronunciation}</p>

        <div class="flex items-center justify-between">
            <span class="btn"><i class="fa-solid fa-circle-info"></i></span>
            <span class="btn"><i class="fa-solid fa-microphone"></i></span>
        </div>

        </div>
        `
        //apends to container
        wordContainer.appendChild(newDiv);
        
    })
    
 }
lessonData();
