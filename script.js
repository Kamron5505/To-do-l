let text = document.querySelector('#text');
let addTask = document.querySelector('#add');
let task = document.querySelector('#task');

let data = [];

function renderData() {
    task.innerHTML = "";
    data.map((item, index) => {
        let taskBlock = document.createElement('div');
        taskBlock.classList.add(
            'bg-blue-300',
            'rounded-md',
            'p-6',
            'flex',
            'justify-between',
            'items-center',
            'mb-2'
        );
        taskBlock.innerHTML = `
    <p class="text-[24px]">${item}</p>
    <div>
        <button class="bg-orange-400 p-2 text-white rounded-md">Edit</button>
        <button onclick="deleteData(${index})" class="bg-red-500 p-2 text-white rounded-md">Delete</button>
    </div>
    `;
        task.append(taskBlock);
    });
}

function addData() {
    let input = text.value;

    if (input.trim() !== "") {
        data.push(input);
        text.value = "";
        localStorage.setItem('task1', data.join(','));
        renderData();
    }
}

function deleteData(index) {
    data.splice(index, 1);
    console.log(data);
    localStorage.setItem('task1', data.join(','));
    renderData();
}
