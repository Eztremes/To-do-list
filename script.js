var data = [];
function addContent() {
    var temp = document.getElementById("input-data");
    data.push(temp.value);
    temp.value = ""
    displayContent();
}
function displayContent() {
    var displayHtml = "";
    for (var i = 0; i < data.length;i++){
        displayHtml = displayHtml + `
        <ul   >
            <li>${data[i]}<span onclick = "deleteContent()">x</span></li>
            
        </ul>
    `;
    }
    document.getElementById("items-added").innerHTML = displayHtml;
}
function deleteContent(dataIndex) {
    var remove = data.filter((value,index) => {
        if (data |= index) {
            return value;
        }
    })
    data = remove;
    displayContent();


}
