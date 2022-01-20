function shuffleAndSortNumbers(action) {
    let arrayOfNumbers = [];

    while(arrayOfNumbers.length < 9){
        let num = Math.floor(Math.random() * 9) + 1;
        if(arrayOfNumbers.indexOf(num) === -1) arrayOfNumbers.push(num);
    }

    if(action && action.toUpperCase() === 'SORT') {
        arrayOfNumbers.sort();
    }

    renderHtml(arrayOfNumbers);
}

function renderHtml(data) {
    var ul = document.getElementById("populateNumbers");
    let liElements = '';

    for(let i=0; i<data.length; i++) {  
        let liClass = "li_"+ (i+1);              
        liElements = liElements + "<li class='"+liClass+"' >" + data[i] + "</li>";              
    }
    
    ul.innerHTML = liElements;
}

shuffleAndSortNumbers('shuffle');
