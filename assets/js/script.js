const githubJsonUrl = 'https://raw.githubusercontent.com/marta32225/webdata/refs/heads/master/db.json'; // Ganti dengan URL raw dari GitHub

const showData = async () => {
await fetch(githubJsonUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data.dbaw);
        createData(data.dbaw);
        //const jsonString = JSON.stringify(data, null, 2); // Format dengan indentasi 2 spasi
        //document.getElementById('jsonData').textContent = jsonString;
    })
    .catch(error => {
        console.error('Gagal memuat data JSON:', error);
        document.getElementById('jsonData').textContent = 'Gagal memuat data.';
    }
);
};
showData();

function createData(argument) {
    // body...
    for (var i = 0; i < argument.length; i++) {
        document.getElementById("no").innerHTML = i+1;
        document.getElementById("nim").innerHTML = argument[i].nim;
        document.getElementById("nama").innerHTML = argument[i].nama;
        document.getElementById("kelas").innerHTML = argument[i].kelas;
        document.getElementById("address").innerHTML = '<a href="' + argument[i].address + '"  class="btn btn-primary">Link</a>';
    }
}
