function createNode(el){
  return document.createElement(el);
}
function appendNode(parent, el){
  return parent.appendChild(el);
}

function readdMoreFunction(){
    var elipse = document.getElementById("elipse")
    var showMore = document.getElementById("show-more")
    var btn = document.getElementById('show-more-btn')

    if (elipse.style.display === "none") {
        elipse.style.display = "inline";
        showMore.style.display = "none"
        btn.innerHTML = "read more "
      } else {
        elipse.style.display = "none";
        btn.innerHTML = "show less"
        showMore.style.display = "inline";
      }
}

function navDropDown(){

  if (document.getElementById('nav-dropdown-el')){
    document.getElementById('nav-dropdown').innerHTML = ""

  }
  else{
    var ul = createNode('ul'),
    statistics = createNode('li'),
    safetyTips = createNode('li'),
    news = createNode('li')
    
    ul.setAttribute('class', 'bg-gray-100 w-full shadow text-2xl text-right text-black font-hairline px-12 py-2')
    ul.setAttribute('id', 'nav-dropdown-el')
    statistics.setAttribute('class', 'my-2')
    safetyTips.setAttribute('class', '')
    news.setAttribute('class', 'my-2')

    statistics.innerHTML = `<a class="nav-dropdown-item focus:text-teal-500" href="#app">Statistics</a>`
    safetyTips.innerHTML = `<a class="nav-dropdown-item focus:text-teal-500" href="#safety-tips">Safety Tips</a>`
    news.innerHTML = `<a class="nav-dropdown-item focus:text-teal-500" href="#">News</a>`

    appendNode(ul, statistics)
    appendNode(ul, safetyTips)
    appendNode(ul, news)
    appendNode(document.getElementById('nav-dropdown'), ul)
  }
}

var ul = createNode('ul'),
    a  = createNode('li'),
    b  = createNode('li'),
    c  = createNode('li'),
    d  = createNode('li'),
    e  = createNode('li'),
    f  = createNode('li'),
    g  = createNode('li'),
    h  = createNode('li')

    a.setAttribute('class', 'mx-6')
    b.setAttribute('class', 'mx-6')
    c.setAttribute('class', 'mx-6')
    d.setAttribute('class', 'mx-6')
    e.setAttribute('class', 'mx-6')
    f.setAttribute('class', 'mx-6')
    g.setAttribute('class', 'mx-6')
    h.setAttribute('class', 'mx-6')

a.innerHTML = `
                Regularly and thoroughly clean your hands with an alcohol-based hand rub
                or wash them with soap and water. Why? Washing your hands with soap and 
                water or using alcohol-based hand rub kills viruses that may be on your hands.
              `
b.innerHTML = `
                Maintain at least 1 metre (3 feet) distance between yourself and others.
                Why? When someone coughs, sneezes, or speaks they spray small liquid droplets 
                from their nose or mouth which may contain virus. If you are too close, you can 
                breathe in the droplets, including the COVID-19 virus if the person has the disease. 
              `
c.innerHTML = `
                Avoid going to crowded places. Why? Where people come together in crowds, you are more
                likely to come into close contact with someone that has COVID-19 and it is more difficult 
                to maintain physical distance of 1 metre (3 feet).
              `
d.innerHTML = `
                Avoid touching eyes, nose and mouth. Why? Hands touch many surfaces and can pick up viruses.
                Once contaminated, hands can transfer the virus to your eyes, nose or mouth. From there, the 
                virus can enter your body and infect you.
              `
e.innerHTML = `
                Make sure you and the people around you follow good respiratory hygiene. 
                This means covering your mouth and nose with your bent elbow or tissue when you cough or sneeze. 
                Then dispose of the used tissue immediately and wash your hands. Why? Droplets spread virus.
                By following good respiratory hygiene, you protect the people around you from viruses such as cold, 
                flu and COVID-19.
              `
f.innerHTML = `
                Stay home and self-isolate even with minor symptoms such as cough, headache, mild fever, until you recover.
                Have someone bring you supplies. If you need to leave your house, wear a mask to avoid infecting others.
                Why? Avoiding contact with others will protect them from possible COVID-19 and other viruses.
              `
g.innerHTML = `
                If you have a fever, cough and difficulty breathing, seek medical attention, but call by telephone in advance if 
                possible and follow the directions of your local health authority. Why? National and local authorities will have 
                the most up to date information on the situation in your area. Calling in advance will allow your health care provider 
                to quickly direct you to the right health facility. This will also protect you and help prevent spread of viruses and other infections.
              `
h.innerHTML = `
                Keep up to date on the latest information from trusted sources, such as WHO or your local and national health authorities.
                Why? Local and national authorities are best placed to advise on what people in your area should be doing to protect themselves.
              `

appendNode(document.getElementById('safety-tips'), a)
appendNode(document.getElementById('safety-tips'), b)
appendNode(document.getElementById('safety-tips'), c)
appendNode(document.getElementById('safety-tips'), d)
appendNode(document.getElementById('safety-tips'), e)
// appendNode(document.getElementById('safety-tips'), f)
// appendNode(document.getElementById('safety-tips'), g)
// appendNode(document.getElementById('safety-tips'), h)
