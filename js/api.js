function createNode(el){
    return document.createElement(el);
}
function appendNode(parent, el){
    return parent.appendChild(el);
}

const loadStats = async _ => {
    const response = await fetch("https://covid-193.p.rapidapi.com/statistics",{
                                "method": "GET",
                                "headers": {
                                    "x-rapidapi-host": "covid-193.p.rapidapi.com",
                                    "x-rapidapi-key": "4eefe5d649msh73e5fcbda166309p145dfbjsnae86ca610a15"
                                }
                            })
    const data  = await response.json();
    return(data.response);
}

loadStats().then(
     function(data)
     {
        var pageList = new Array();
        var currentPage = 1;
        var numberPerPage = 6;
        var numberOfPages = getNumberOfPages();

        loadList();
         var nextPage = function(event) {
            currentPage += 1;
            loadList();
        }
        
        var previousPage = function(event) {
            currentPage -= 1;
            loadList();
        }
        
        var firstPage = function(event) {
            currentPage = 1;
            loadList();
        }
        
        var lastPage = function(event) {
            currentPage = numberOfPages;
            loadList();
        }
        function getNumberOfPages() {
            return Math.ceil(data.length / numberPerPage);
        }
        function loadList() {
            var begin = ((currentPage - 1) * numberPerPage);
            var end = begin + numberPerPage;
        
            pageList = data.slice(begin, end);
            drawList(pageList);
            check();
        }
        function drawList(stat)
        {
            document.getElementById('app').innerHTML = "";
            for (i = 0; i < stat.length; i++)
            {
                var ul = createNode('ul'),
                    li = createNode('li'),
                    head = createNode('div'),
                    body = createNode('div'),
                    foot = createNode('div'),
                    country = createNode('p'),
                    day = createNode('p'),
                    population = createNode('p'),
                    cases = createNode('p'),
                    recovered = createNode('p'),
                    deaths = createNode('p'),
                    tests = createNode('p')
        
                li.setAttribute('class', 'rounded-sm overflow-hidden shadow-md my-6 mx-2 pb-4 ')
                head.setAttribute('class', 'bg-teal-400 mb-4')
                foot.setAttribute('class', 'flex mt-4 justify-center')
                body.setAttribute('class', 'mx-6 text-gray-700 text-base font-hairline')
                country.setAttribute('class', 'text-center text-xl font-semibold')
                day.setAttribute('class', 'text-center font-hairline text-sm italic mb-2')
                deaths.setAttribute('class', 'inline-block px-3 py-1 text-sm font-semibold text-gray-700 mr-2')
                recovered.setAttribute('class', 'inline-block px-3 py-1 text-sm font-semibold text-gray-700 mr-2')
                tests.setAttribute('class', "border-b-2 border-gray-300 pb-6")
                country.innerHTML = `${stat[i].country}`;
                day.innerHTML = `Date : ${stat[i].day}`
                population.innerHTML = `Population: ${stat[i].population}`
                cases.innerHTML = `Cases : ${stat[i].cases.total}`
                recovered.innerHTML = `Recovered :  ${stat[i].cases.recovered}`
                deaths.innerHTML = `Deaths : ${stat[i].deaths.total}`
                tests.innerHTML = `Tests : ${stat[i].tests.total}`
        
                appendNode(head, country)
                appendNode(head, day)
                appendNode(body, population)
                appendNode(body, cases)
                appendNode(body, tests)
                appendNode(foot, recovered)
                appendNode(foot, deaths)
                appendNode(body, foot)
                appendNode(li, head)
                appendNode(li, body)
                appendNode(ul, li)
                appendNode(document.getElementById('app'), ul)

            }
        }
        function check() {
            document.getElementById("next").disabled = currentPage == numberOfPages ? true : false;
            document.getElementById("previous").disabled = currentPage == 1 ? true : false;
            document.getElementById("first").disabled = currentPage == 1 ? true : false;
            document.getElementById("last").disabled = currentPage == numberOfPages ? true : false;
        }

        var first = document.querySelector('#first')
        var next = document.querySelector('#next')
        var previous = document.querySelector('#previous')
        var last = document.querySelector('#last')
        first.addEventListener('click', firstPage)
        next.addEventListener('click', nextPage)
        previous.addEventListener('click', previousPage)
        last.addEventListener('click', lastPage)
     }
 )
