let tabs = function(arrIDs) {
  /*
    #id
      ul
        li 
      ul
        li
  */

  let active = function(current, index) {
    let parentDiv = current.closest('div');

    if (!parentDiv) return;

    let ulContentLi = parentDiv.querySelector(`ul:last-child li:nth-child(${index+1})`);
    
    ulContentLi.classList.add('active');
    current.classList.add('active');
    // let ulContent = uls[1];
  }

  if (!arrIDs || arrIDs.length == 0) return;

  arrIDs.forEach(function(id) {
    let tabsIDs = document.querySelectorAll(`#${id}`);

    if (!tabsIDs || tabsIDs.length == 0) return;

    tabsIDs.forEach(function(tabsID) {
     let uls = document.querySelectorAll('ul');

     let ulTab = uls[0];
     
     

     let ulTabLi = ulTab.querySelectorAll('li');
     
     

     ulTabLi.forEach(function(tabLi, index) {
       tabLi.addEventListener('click', function() {
        active(this, index); //index - li's index number 
       });
     });
    });

  });
}