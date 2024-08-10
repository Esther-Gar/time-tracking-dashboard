const daily = document.getElementById('frame1');
const weekly = document.getElementById('frame2');
const monthly = document.getElementById('frame3');
let boxContent;

daily.addEventListener('click', getDailyReport);
function getDailyReport() {
    let content = document.querySelector('#userPanel');
    let DATA = [];
    
    function getTimeTracking() {
        fetch ('../data.json')
            .then (response => response.json())
            .then (data => {
                DATA = data;
                boxContent = "";
                DATA.forEach(data => {
                    boxContent += `
                    <div class="box-content">
                        <div class="panel-box ${data.title.toLowerCase()}">
                            <div id="container1">
                                <div id="work">
                                    <div class="title">
                                        <p>${data.title}</p>
                                        <img src="./images/icon-ellipsis.svg" alt="ellipsis">
                                    </div>
                            
                                    <div id="daily">
                                        <h4>${data.timeFrames.daily.current}hrs</h4>
                                        <p>Last day - ${data.timeFrames.daily.previous}hrs</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div>
                    `;
            });
    
            content.innerHTML = boxContent;
    
        })
    };

    getTimeTracking();

weekly.addEventListener('click', getWeeklyReport);
function getWeeklyReport() {
    let content = document.querySelector('#userPanel');
    let DATA = [];
    
    function getTimeTracking() {
        fetch ('../data.json')
            .then (response => response.json())
            .then (data => {
                DATA = data;
                boxContent = "";
                DATA.forEach(data => {
                    boxContent += `
                    <div class="box-content">
                        <div class="panel-box ${data.title.toLowerCase()}">
                            <div id="container1">
                                <div id="work">
                                    <div class="title">
                                        <p>${data.title}</p>
                                        <img src="./images/icon-ellipsis.svg" alt="ellipsis">
                                    </div>
                            
                                    <div id="daily">
                                        <h4>${data.timeFrames.weekly.current}hrs</h4>
                                        <p>Last week - ${data.timeFrames.weekly.previous}hrs</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div>
                    `;
            });
    
            content.innerHTML = boxContent;
    
        })
    };

    getTimeTracking();}

    monthly.addEventListener('click', getMonthlyReport);
function getMonthlyReport() {
    let content = document.querySelector('#userPanel');
    let DATA = [];
    
    function getTimeTracking() {
        fetch ('../data.json')
            .then (response => response.json())
            .then (data => {
                DATA = data;
                boxContent = "";
                DATA.forEach(data => {
                    boxContent += `
                    <div class="box-content">
                        <div class="panel-box ${data.title.toLowerCase()}">
                            <div id="container1">
                                <div id="work">
                                    <div class="title">
                                        <p>${data.title}</p>
                                        <img src="./images/icon-ellipsis.svg" alt="ellipsis">
                                    </div>
                            
                                    <div id="daily">
                                        <h4>${data.timeFrames.monthly.current}hrs</h4>
                                        <p>Last month - ${data.timeFrames.monthly.previous}hrs</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div>
                    `;
            });
    
            content.innerHTML = boxContent;    
        })
    };

    getTimeTracking();}



}



