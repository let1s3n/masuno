const persons = [
  {
    picture: './assets/profile_picture.png',
    fullname: 'Mike Taylor',
    location: 'Lahore, Pakistan',
    testimony: `“On the Windows talking painted pasture yet its 
express parties use. Sure last upon he same as 
knew next. Of believed or diverted no.”`
  },
  {
    picture: './assets/profile_picture.png',
    fullname: 'Dayana Huaytalla',
    location: 'París, Francia',
    testimony: `“Un muy buen trabajo!”`
  },
  {
    picture: './assets/profile_picture.png',
    fullname: 'Jose Carneiro',
    location: 'Lima, Perú',
    testimony: `“Muy contento con los resultados!”`
  }
]
const currentSlideBox = document.getElementById("current-slide");
const nextSlideBox = document.getElementById("next-slide");
const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');
const link3 = document.getElementById('link3');

let index = 0;

window.onload = () => {
  getSlides(index);

}

const navUp = document.getElementById("nav-up");
const navDown = document.getElementById("nav-down");

navUp.onclick = e => {
  e.preventDefault();
  if (index != 0) {
    index--;
    getSlides(index);
  }

}

navDown.onclick = e => {
  e.preventDefault();
  index++;
  getSlides(index);
}

link1.onclick = e => {
  changeSlideOpacity('title1');
}

link2.onclick = e => {
  changeSlideOpacity('title2');
}

link3.onclick = e => {
  changeSlideOpacity('title3');
}

const getSlides = (index) => {
  currentSlideBox.innerHTML = `<div class="card">
  <div class="profile-picture"><img src=${persons[index].picture} alt=""></div>
  <div class="testimony multiline">${persons[index].testimony}</div>
  <div class="fullname">${persons[index].fullname}</div>
  <div class="location">${persons[index].location}</div>
  </div>`;
  nextSlideBox.innerHTML = `<div class="card">
  <div class="profile-picture"><img src=${persons[index + 1].picture} alt=""></div>
  <div class="testimony multiline">${persons[index + 1].testimony}</div>
  <div class="fullname">${persons[index + 1].fullname}</div>
  <div class="location">${persons[index + 1].location}</div>
  </div>`;
}

const changeSlideOpacity = id => {
  const titles = document.querySelectorAll('.title');
  const title = document.getElementById(id);

  titles.forEach(title => {
    title.style.opacity = 0;
  });
  
  title.style.opacity = 1;
}


