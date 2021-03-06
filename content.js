function csv() {
    let rows = document.body.getElementsByTagName("tr")
    for (row of rows) {
        if (row.classList != undefined) {
            if (row.classList[0] == 'odd' || row.classList[0] == 'even') {
                elements = row.getElementsByTagName('td')
                let arr = [];
                for (ele of elements) {
                    arr.push(ele.innerText)
                }
                csvArray.push(arr)
            }
        }
    }
}

var startPageNumber = document.getElementsByClassName("paginate_button active")[0].getElementsByTagName("a")[0].text

document.getElementsByTagName("li")[12].getElementsByTagName("a")[0].click()

var csvArray = [
    ["College", "Building", "Floor", 'Room', 'Sqft', 'Number of People', 'Sub-Free', 'Features']
];
// 
var next = document.getElementById('table_next')
csv()
while (next.classList.length <= 2) {
    next.click()
    next = document.getElementById("table_next")
    csv()
}

var csvContent = "data:text/csv;charset=utf-8," +
    csvArray.map(e => e.join(",")).join("\n");

var encodedUri = encodeURI(csvContent);
var link = document.createElement("a");
link.setAttribute("href", encodedUri);
link.setAttribute("download", "rooms.csv");
document.body.appendChild(link); // Required for FF
link.click();

document.getElementsByTagName("li")[12].getElementsByTagName("a")[0].click()

while (document.getElementsByClassName("paginate_button active")[0].getElementsByTagName("a")[0].text != startPageNumber) {
    document.getElementById('table_next').click()
}

// Feature Ideas:
// - Nicer looking interface for the extension to work with:
//      * maybe landing page for when you first download?
// - Integrate in the ratings of a room, if they are available
// - Integrate in the textual reviews of a room, if they are available