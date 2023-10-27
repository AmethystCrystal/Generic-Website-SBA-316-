const p = document.createElement("p");
p.textContent = "Nullam faucibus lectus a lectus posuere, vitae mollis lorem fringilla. Phasellus ultricies ut nulla vitae mattis. Nulla finibus eleifend euismod. Cras pellentesque ex a rhoncus suscipit. Nulla accumsan sem fringilla augue consequat, id pulvinar sapien eleifend. Nulla augue libero, luctus sit amet nibh nec, faucibus tincidunt diam. Suspendisse id euismod libero. Sed semper auctor dolor eu gravida. Praesent euismod magna tempus mauris gravida dictum. Vestibulum vehicula aliquet nisl, quis viverra odio fermentum vel. Integer vulputate libero ut purus iaculis finibus. Cras rhoncus erat ut ipsum hendrerit tempor. Aenean finibus euismod eros sed cursus. Ut vulputate leo id maximus consequat. Duis ac posuere neque, eu ultrices quam.";

const flexContainer = document.getElementById("flex")
flexContainer.appendChild(p);

const flexItems = document.querySelectorAll(".container .flex-item");

flexItems.forEach(function(item){
    item.textContent = "Nullam faucibus lectus a lectus posuere, vitae mollis lorem fringilla. Phasellus ultricies ut nulla vitae mattis. Nulla finibus eleifend euismod. Cras pellentesque ex a rhoncus suscipit. Nulla accumsan sem fringilla augue consequat, id pulvinar sapien eleifend. Nulla augue libero, luctus sit amet nibh nec, faucibus tincidunt diam. Suspendisse id euismod libero. Sed semper auctor dolor eu gravida. Praesent euismod magna tempus mauris gravida dictum. Vestibulum vehicula aliquet nisl, quis viverra odio fermentum vel. Integer vulputate libero ut purus iaculis finibus. Cras rhoncus erat ut ipsum hendrerit tempor. Aenean finibus euismod eros sed cursus. Ut vulputate leo id maximus consequat. Duis ac posuere neque, eu ultrices quam.";
    
})

