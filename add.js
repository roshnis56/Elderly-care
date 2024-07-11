function showPillDetails(name, time) {
    const pillDetails = document.querySelector('.pill-details');
    const pillDetailContent = document.getElementById('pill-detail-content');
    

    pillDetailContent.innerHTML = `
        <img src="pill.jpeg" alt="Pill Image">
        <h2>${name}</h2><br>
        <p><strong>Time:</strong> ${time}</p><br>
        <button class="action-btn"onclick=she()>Schedule</button><br>
        <button class="action-btn" onclick="takePill()">Taken Pill</button><br><br>
        <p id="demo"></p>
    `;
    document.querySelector('.pill-list').style.display = 'none';
    pillDetails.classList.add('active');
}

function goBack() {
    document.querySelector('.pill-list').style.display = 'block';
    document.querySelector('.pill-details').classList.remove('active');
}

function takePill() {
    alert('Thank You For Taking!');
}
function she(){
    // alert('Resheduled')
    let text;
    let person = prompt("Please enter your resheduled time:",);
    if (person == null || person == "") {
      text = "Please enter the resheduled time";
    } else {
      text = " It is Resheduled to" + person + "Thank you!!" ;
    }
    document.getElementById("demo").innerHTML = text;

}