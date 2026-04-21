let tasks = JSON.parse(localStorage.getItem('tasks'))||[]
let currentFilter='all'

function saveTasks(){
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

function addTask(){
    const input = document.querySelector('#task-input')
     const text = input.value.trim()
    if (text==='') return ;

    tasks.push({ id:Date.now() , text:text, completed:false})
    input.value=''
    saveTasks()
    render()
}

function toggleTask(id){
    tasks.map(function(task){
        if(task.id===id){
            task.completed = !task.completed
             return task  
        }
    })
      saveTasks()
    render()
}
function clearCompleted() {
  task = tasks.filter(function(task) {
    return !task.completed
  })
  saveTasks()
  render()
}
function deleteTask(){
      task = tasks.filter(function(task) {
     return task.id !== id
  })
  saveTasks()
  render()
}
function render() {
  const list = document.querySelector('#task-list')
  list.innerHTML = ''

  // filter tasks
  let filtered = tasks
  if (currentFilter === 'active') {
    filtered = tasks.filter(t => !t.completed)
  } else if (currentFilter === 'completed') {
    filtered = tasks.filter(t => t.completed)
  }

  // create task items
  filtered.forEach(function(task) {
    const li = document.createElement('li')
    li.classList.add('task-item')
    if (task.completed) li.classList.add('done')

    li.innerHTML = `
      <span class="task-text">${task.text}</span>
      <div class="task-actions">
        <button onclick="toggleTask(${task.id})">✓</button>
        <button onclick="deleteTask(${task.id})">✕</button>
      </div>
    `
    list.appendChild(li)
  })
 const remaining = tasks.filter(t => !t.completed).length
  document.querySelector('#task-count').textContent =
    `${remaining} task${remaining !== 1 ? 's' : ''} remaining`
}
document.querySelectorAll('.filter-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    currentFilter = btn.dataset.filter
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'))
    btn.classList.add('active')
    render()
  })
})

// add button
document.querySelector('#add-btn').addEventListener('click', addTask)

// Enter key se bhi add ho
document.querySelector('#task-input').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') addTask()
})

// clear completed
document.querySelector('#clear-btn').addEventListener('click', clearCompleted)

// start
render()