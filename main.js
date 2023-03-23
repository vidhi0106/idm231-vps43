let sign = "";
let img = "";
let charName = "";
let bio = "";
let helping = "";


const maskAquarius = document.querySelector('.aquarius-button');
const maskpisces = document.querySelector('.pisces-button');
const maskAries = document.querySelector('.aries-button');
const maskTaurus = document.querySelector('.taurus-button');
const maskAGemini = document.querySelector('.gemini-button');
const maskCancer = document.querySelector('.cancer-button');
const maskLeo = document.querySelector('.leo-button');
const maskVirgo = document.querySelector('.virgo-button');
const maskLibra = document.querySelector('.libra-button');
const maskScorpio = document.querySelector('.scorpio-button');
const maskSagittarius = document.querySelector('.sagittarius-button');
const maskCapricorn = document.querySelector('.capricorn-button');


function zodiac(){
    
    const birthmonth = document.getElementById("month").value;
    const birthday = document.getElementById("day").value;


    if (birthmonth > 12){
      return alert('Please enter a valid date!')
    }
    if (birthday > 31){
      return alert('Please enter a valid date!')
    }
    
    let result = "Please enter a valid date!";

    if(birthmonth == 2 && birthday > 29){ 
      return alert('Please enter a valid date!') 
    }

    if(birthmonth == 4 && birthday > 30){ 
      return alert('Please enter a valid date!') 
    }

    if(birthmonth == 6 && birthday > 30){ 
      return alert('Please enter a valid date!') 
    }

    if(birthmonth == 9 && birthday > 30){ 
      return alert('Please enter a valid date!') 
    }
    if(birthmonth == 11 && birthday > 30){ 
      return alert('Please enter a valid date!') 
    }

    if ((birthmonth == 1 && birthday >= 20) || (birthmonth == 2 && birthday <= 18)){
      
      document.getElementsByClassName("zodiac-sub-box").innerHTML
      sign = "Aquarius";
      img = "graphics/aquarius.png";
      charName = "Blueberry Lemonade Bubble Tea";
      bio = "Aquarians are known for their independent and innovative nature, and the refreshing and tart flavors of blueberry and lemonade in a bubble tea reflect their originality and creative spirit.";
      var audio = new Audio ('audio/aquarius.mp3');
      audio.play();
    

      }
  
    if ((birthmonth == 2&& birthday >= 19) || (birthmonth == 3&& birthday <= 20)){
      
      document.getElementsByClassName("zodiac-sub-box").innerHTML
      sign="Pisces";
      img="graphics/pisces.png";
      charName="Coconut Lychee Bubble Tea";
      bio ="Pisceans are known for their dreamy and imaginative nature, and the sweet and tropical flavors of coconut and lychee in a bubble tea represent their whimsical and mystical personality.";
      var audio = new Audio ('audio/pisces.mp3');
      audio.play();
        
      }
    if ((birthmonth == 3 && birthday >= 21) || (birthmonth == 4 && birthday <= 19)){
     
      document.getElementsByClassName("zodiac-sub-box").innerHTML
      sign="Aries";
      img="graphics/aries.png";
      charName="Spicy Mango Bubble Tea";
      bio ="Aries is known for being adventurous and passionate, and this bubble tea flavor reflects their bold personality with the spicy kick of mango.";
      var audio = new Audio ('audio/aries.mp3');
      audio.play();
      
    }
    
    if ((birthmonth == 4 && birthday >= 20)|| (birthmonth == 5 && birthday <= 20)){
      
      document.getElementsByClassName("zodiac-sub-box").innerHTML
      sign="Taurus";
      img="graphics/taurus.png";
      charName="Honeydew Milk Tea";    
      bio ="Taurus is known for their love of comfort and luxury, and the creamy sweetness of honeydew milk tea perfectly suits their indulgent nature.";
      var audio = new Audio ('audio/taurus.mp3');
      audio.play();

      }
    
    if ((birthmonth == 5 && birthday >= 21) || (birthmonth == 6 && birthday <= 20)){
     
      document.getElementsByClassName("zodiac-sub-box").innerHTML
      sign="Gemini";
      img="graphics/gemini.png";
      charName="Matcha Latte Bubble Tea";
      bio ="Geminis are known for their intellectual curiosity and quick-wittedness, and the earthy flavor of matcha in a latte bubble tea reflects their sharp and inquisitive personality.";
      var audio = new Audio ('audio/gemini.mp3');
      audio.play();

      }
    
    if ((birthmonth == 6 && birthday >= 21) || (birthmonth == 7 && birthday <= 22)){
      
      document.getElementsByClassName("zodiac-sub-box").innerHTML
      sign="Cancer";
      img="graphics/cancer.png";
      charName="Blueberry Lavender Bubble Tea";
      bio ="Cancerians are known for their nurturing and sensitive nature, and the soothing combination of blueberry and lavender in a bubble tea represents their calm and caring personality.";
      var audio = new Audio ('audio/cancer.mp3');
      audio.play();

      }
    if ((birthmonth == 7 && birthday >= 23) || (birthmonth == 8 && birthday <= 22)){
      
      document.getElementsByClassName("zodiac-sub-box").innerHTML
      sign="Leo";
      img="graphics/leo.png";
      charName="Pineapple Coconut Bubble Tea";
      bio ="Leos are known for their bold and flamboyant personality, and the tropical flavors of pineapple and coconut in a bubble tea perfectly reflect their energetic and vibrant nature.";
      var audio = new Audio ('audio/leo.mp3');
      audio.play();

      }
      if ((birthmonth == 8 && birthday >= 23) || (birthmonth == 9 && birthday <= 22)){

        document.getElementsByClassName("zodiac-sub-box").innerHTML
        sign="Virgo";
        img="graphics/virgo.png";
        charName="Green Apple Bubble Tea";
        bio ="Virgos are known for their practicality and attention to detail, and the crisp and refreshing flavor of green apple in a bubble tea reflects their meticulous and analytical nature.";
        var audio = new Audio ('audio/virgo.mp3');
        audio.play();
        
        }
      if ((birthmonth == 9 && birthday >= 23) || (birthmonth == 10 && birthday <= 22)){
        
        document.getElementsByClassName("zodiac-sub-box").innerHTML
        sign="Libra";
        img="graphics/libra.png";
        charName="Rose Milk Tea";
        bio ="Libras are known for their love of beauty and harmony, and the delicate floral notes of rose in a milk tea represent their aesthetic sensibility and desire for balance.";
        var audio = new Audio ('audio/libra.mp3');
        audio.play();

      }
      if ((birthmonth == 10 && birthday >= 23) || (birthmonth == 11 && birthday <= 21)){
       
        document.getElementsByClassName("zodiac-sub-box").innerHTML
        sign="Scorpio";
        img="graphics/scorpio.png";
        charName="Chocolate Brown Sugar Bubble Tea";
        bio ="Scorpios are known for their intense and passionate nature, and the rich and decadent flavors of chocolate and brown sugar in a bubble tea reflect their deep and complex personality.";
        var audio = new Audio ('audio/scorpio.mp3');
        audio.play();
        
      }
      if ((birthmonth == 11 && birthday >= 22) || (birthmonth == 12 && birthday <= 21)){
        
        document.getElementsByClassName("zodiac-sub-box").innerHTML
        sign="Sagittarius";
        img="graphics/saggitarius.png";
        charName="Mango Passionfruit Bubble Tea";
        bio ="Sagittarians are known for their love of adventure and spontaneity, and the exotic and fruity flavors of mango and passionfruit in a bubble tea reflect their free-spirited and adventurous nature.";
        var audio = new Audio ('audio/saggitarius.mp3');
        audio.play();
        
        }
    
    if((birthmonth == 12 && birthday >= 22) || (birthmonth == 1 && birthday <= 19)){
       
        document.getElementsByClassName("zodiac-sub-box").innerHTML
        sign="Capricorn";
        img="graphics/capricorn.png";
        charName="Black Sesame Bubble Tea";
        bio ="Capricorns are known for their practicality and ambition, and the subtle and nutty flavor of black sesame in a bubble tea represents their disciplined and determined personality.";
        var audio = new Audio ('audio/capricorn.mp3');
        audio.play();
        
      }
        else if (birthmonth>12||birthday>31){
          return alert("Please enter an accurate date !!!")
  

      }

  const charOutput = document.querySelector('.output');
  
   
      setCharacter();
  }

function setCharacter(){
  const signName = document.querySelector('.js-sign-name');
  signName.innerHTML = sign;

  const imageName = document.querySelector('.js-character-img');
  imageName.src = img;

  const characterName = document.querySelector('.js-character-name-person');
  characterName.innerHTML = charName;

  const bioName = document.querySelector('.js-character-bio');
  bioName.innerHTML = bio;

  const revealBox = document.querySelector('.js-character-reveal');
  revealBox.style.display = "block";
}



const submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', function(event){
  event.preventDefault();
  zodiac();
});


const showHelpBox = () =>{

  const helpBox = document.querySelector('.js-help-box');


  if (helping){
      helpBox.style.display = "none";
      helping = false;
  }
  
  else{
      helpBox.style.display = "flex";
      helping = true;
  }

  rectangle(helping);
};

function rectangle(hiding){
  const mainRectangle = document.querySelector('.js-main-rectangle');
  if (hiding){
    mainRectangle.style.display = "none";
  }
  else{
    mainRectangle.style.display = "block";
  }
}
//  event listener for help open button 
const helpOpenButton = document.querySelector('.js-help-button');
helpOpenButton.addEventListener('click', showHelpBox);

//  event listener for help close button
const helpCloseButton = document.querySelector('.js-help-button-close');
helpCloseButton.addEventListener('click', showHelpBox);

// event listener for images button
maskAquarius.addEventListener('click', function(){
  document.getElementsByClassName("zodiac-sub-box").innerHTML
  sign = "Aquarius";
  img = "graphics/aquarius.png";
  charName = "Blueberry Lemonade Bubble Tea";
  bio = "Aquarians are known for their independent and innovative nature, and the refreshing and tart flavors of blueberry and lemonade in a bubble tea reflect their originality and creative spirit.";
  setCharacter();
  var audio = new Audio ('audio/aquarius.mp3');
  audio.play();

});
maskpisces.addEventListener('click', function(){
  document.getElementsByClassName("zodiac-sub-box").innerHTML
  sign="Pisces";
  img="graphics/pisces.png";
  charName="Coconut Lychee Bubble Tea ";
  bio ="Pisceans are known for their dreamy and imaginative nature, and the sweet and tropical flavors of coconut and lychee in a bubble tea represent their whimsical and mystical personality.";
  setCharacter();
  var audio = new Audio ('audio/pisces.mp3');
  audio.play();  
});
maskAries.addEventListener('click', function(){
  document.getElementsByClassName("zodiac-sub-box").innerHTML
  sign="Aries";
  img="graphics/aries.png";
  charName="Spicy Mango Bubble Tea";
  bio ="Aries is known for being adventurous and passionate, and this bubble tea flavor reflects their bold personality with the spicy kick of mango.";
  setCharacter();
  var audio = new Audio ('audio/aries.mp3');
  audio.play();
});
maskTaurus.addEventListener('click', function(){
  document.getElementsByClassName("zodiac-sub-box").innerHTML
  sign="Taurus";
  img="graphics/taurus.png";
  charName="Honeydew Milk Tea";    
  bio ="Taurus is known for their love of comfort and luxury, and the creamy sweetness of honeydew milk tea perfectly suits their indulgent nature.";
  setCharacter();
  var audio = new Audio ('audio/taurus.mp3');
  audio.play();  
});
maskAGemini.addEventListener('click', function(){
  document.getElementsByClassName("zodiac-sub-box").innerHTML
  sign="Gemini";
  img="graphics/gemini.png";
  charName="Matcha Latte Bubble Tea";
  bio ="Geminis are known for their intellectual curiosity and quick-wittedness, and the earthy flavor of matcha in a latte bubble tea reflects their sharp and inquisitive personality.";
  setCharacter();
  var audio = new Audio ('audio/gemini.mp3');
  audio.play();  
});
maskCancer.addEventListener('click', function(){
  document.getElementsByClassName("zodiac-sub-box").innerHTML
  sign="Cancer";
  img="graphics/cancer.png";
  charName="Blueberry Lavender Bubble Tea";
  bio ="Cancerians are known for their nurturing and sensitive nature, and the soothing combination of blueberry and lavender in a bubble tea represents their calm and caring personality"
  ;
  setCharacter();
  var audio = new Audio ('audio/cancer.mp3');
  audio.play();  
});
maskLeo.addEventListener('click', function(){
  document.getElementsByClassName("zodiac-sub-box").innerHTML
  sign="Leo";
  img="graphics/leo.png";
  charName="Pineapple Coconut Bubble Tea";
  bio ="Leos are known for their bold and flamboyant personality, and the tropical flavors of pineapple and coconut in a bubble tea perfectly reflect their energetic and vibrant nature.";
  setCharacter();
  var audio = new Audio ('audio/leo.mp3');
  audio.play();  
});
maskVirgo.addEventListener('click', function(){
  document.getElementsByClassName("zodiac-sub-box").innerHTML
  sign="Virgo";
  img="graphics/virgo.png";
  charName="Green Apple Bubble Tea";
  bio ="Virgos are known for their practicality and attention to detail, and the crisp and refreshing flavor of green apple in a bubble tea reflects their meticulous and analytical nature.";
  setCharacter();
  var audio = new Audio ('audio/virgo.mp3');
  audio.play();  
});
maskLibra.addEventListener('click', function(){
  document.getElementsByClassName("zodiac-sub-box").innerHTML
  sign="Libra";
  img="graphics/libra.png";
  charName="Rose Milk Tea";
  bio ="Libras are known for their love of beauty and harmony, and the delicate floral notes of rose in a milk tea represent their aesthetic sensibility and desire for balance.";
  setCharacter();
  var audio = new Audio ('audio/libra.mp3');
  audio.play();  
});
maskScorpio.addEventListener('click', function(){
  document.getElementsByClassName("zodiac-sub-box").innerHTML
  sign="Scorpio";
  img="graphics/scorpio.png";
  charName="Chocolate Brown Sugar Bubble Tea";
  bio ="Scorpios are known for their intense and passionate nature, and the rich and decadent flavors of chocolate and brown sugar in a bubble tea reflect their deep and complex personality.";
  setCharacter();
  var audio = new Audio ('audio/scorpio.mp3');
  audio.play();  
});
maskSagittarius.addEventListener('click', function(){
  document.getElementsByClassName("zodiac-sub-box").innerHTML
  sign="Sagittarius";
  img="graphics/saggitarius.png";
  charName="Mango Passionfruit Bubble Tea";
  bio ="Sagittarians are known for their love of adventure and spontaneity, and the exotic and fruity flavors of mango and passionfruit in a bubble tea reflect their free-spirited and adventurous nature.";
  setCharacter();
  var audio = new Audio ('audio/saggitarius.mp3');
  audio.play();  
});
maskCapricorn.addEventListener('click', function(){
  document.getElementsByClassName("zodiac-sub-box").innerHTML
  sign="Capricorn";
  img="graphics/capricorn.png";
  charName="Black Sesame Bubble Tea";
  bio ="Capricorns are known for their practicality and ambition, and the subtle and nutty flavor of black sesame in a bubble tea represents their disciplined and determined personality.";
  setCharacter();
  var audio = new Audio ('audio/capricorn.mp3');
  audio.play();
  
});