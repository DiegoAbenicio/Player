var page = 0;
function fpage(currentPage){
  page = currentPage;
}

function play(music) {
 if(page == 1){
    switch (music){
      case 1:
        document.getElementById("audioplayer").src=src="../../Midea/Songs/Olivia Rodrigo/Olivia Rodrigo - Drivers License.mp3"
        break;
      case 2:
        document.getElementById("audioplayer").src=src="../../Midea/Songs/Olivia Rodrigo/Olivia Rodrigo - deja vu.mp3"
        break;
      case 3:
        document.getElementById("audioplayer").src=src="../../Midea/Songs/Olivia Rodrigo/Olivia Rodrigo - good 4 u.mp3"
        break;
      case 4:
        document.getElementById("audioplayer").src=src="../../Midea/Songs/Olivia Rodrigo/Olivia Rodrigo - traitor.mp3"
        break
      case 5:;
        document.getElementById("audioplayer").src=src="../../Midea/Songs/Olivia Rodrigo/Olivia Rodrigo - Brutal.mp3"
        break;
      default:
        document.getElementById("audioplayer").src= '';
    }
  }
  else if(page == 2){
    switch (music){
      case 1:
        document.getElementById("audioplayer").src="../../Midea/Songs/Gorillaz/Gorillaz - Intro.mp3"
        break;
      case 2:
        document.getElementById("audioplayer").src="../../Midea/Songs/Gorillaz/Gorillaz - Last Living Souls.mp3"
        break;
      case 3:
        document.getElementById("audioplayer").src="../../Midea/Songs/Gorillaz/Gorillaz - Kids With Guns.mp3"
        break;
      case 4:
        document.getElementById("audioplayer").src="../../Midea/Songs/Gorillaz/Gorillaz - O Green World.mp3"
        break;
      case 5:
        document.getElementById("audioplayer").src="../../Midea/Songs/Gorillaz/Gorillaz - Dirty Harry.mp3"
        break;
      case 6:
        document.getElementById("audioplayer").src="../../Midea/Songs/Gorillaz/Gorillaz - Feel Good Inc.mp3"
        break;
      case 7:
        document.getElementById("audioplayer").src="../../Midea/Songs/Gorillaz/Gorillaz - El Manana.mp3"
        break;
      case 8:
        document.getElementById("audioplayer").src="../../Midea/Songs/Gorillaz/Gorillaz - Every Planet We Reach.mp3"
        break;
      case 9:
        document.getElementById("audioplayer").src="../../Midea/Songs/Gorillaz/Gorillaz - November Has Come.mp3"
        break;
      case 10:
        document.getElementById("audioplayer").src="../../Midea/Songs/Gorillaz/Gorillaz - All Alone.mp3"
        break;
      case 11:
        document.getElementById("audioplayer").src="../../Midea/Songs/Gorillaz/Gorillaz - White Light.mp3"
        break;
      case 12:
        document.getElementById("audioplayer").src="../../Midea/Songs/Gorillaz/Gorillaz - Dare.mp3"
        break;
      case 13:
        document.getElementById("audioplayer").src="../../Midea/Songs/Gorillaz/Gorillaz - Fire Coming Out.mp3"
        break;
      case 14:
        document.getElementById("audioplayer").src="../../Midea/Songs/Gorillaz/Gorillaz - Demon Days.mp3"
        break;
      default:
        document.getElementById("audioplayer").src= '';
    }
  }else if(page == 3){
    switch (music){
      case 1:
        document.getElementById("audioplayer").src="../../Midea/Songs/Arctic Monkeys/Arctic Monkeys - Brianstorm.mp3";
        break;
      case 2:
        document.getElementById("audioplayer").src= src="../../Midea/Songs/Arctic Monkeys/Arctic Monkeys - Fluorescent Adolescent.mp3";
        break;
      case 3:
        document.getElementById("audioplayer").src="../../Midea/Songs/Arctic Monkeys/Arctic Monkeys - Teddy Picker.mp3";
        break;
      default:
        document.getElementById("audioplayer").src= '';
    }
  }else if(page == 4){
    switch(music){
      case 1:
        document.getElementById("audioplayer").src="../../Midea/Songs/Citizen Cope/Citizen Cope - Nite Becomes Day.mp3";
        break;
      case 2:
        document.getElementById("audioplayer").src="../../Midea/Songs/Citizen Cope/Citizen Cope - Pablo Picasso.mp3";
        break;
      case 3:
        document.getElementById("audioplayer").src="../../Midea/Songs/Citizen Cope/Citizen Cope - My Way Home.mp3";
        break;
      case 4:
        document.getElementById("audioplayer").src="../../Midea/Songs/Citizen Cope/Citizen Cope - Son's Gonna Rise.mp3";
        break;
      case 5:
        document.getElementById("audioplayer").src="../../Midea/Songs/Citizen Cope/Citizen Cope - Sideways.mp3";
        break;
      case 6:
        document.getElementById("audioplayer").src="../../Midea/Songs/Citizen Cope/Citizen Cope - Penitentiary.mp3";
        break;
      case 7:
        document.getElementById("audioplayer").src="../../Midea/Songs/Citizen Cope/Citizen Cope - Hurricane Waters.mp3";
        break;
      case 8:
        document.getElementById("audioplayer").src="../../Midea/Songs/Citizen Cope/Citizen Cope - D'Artagnan's Theme.mp3";
        break;
      case 9:
        document.getElementById("audioplayer").src="../../Midea/Songs/Citizen Cope/Citizen Cope - Bullet And A Target.mp3";
        break;
      case 10:
        document.getElementById("audioplayer").src="../../Midea/Songs/Citizen Cope/Citizen Cope - Fame.mp3";
        break;
      case 11:
        document.getElementById("audioplayer").src="../../Midea/Songs/Citizen Cope/Citizen Cope - Deep.mp3";
        break;
      default:
        document.getElementById("audioplayer").src= '';
    }
  }
}