/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/construct.js":
/*!**************************!*\
  !*** ./src/construct.js ***!
  \**************************/
/*! exports provided: Project, Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Project\", function() { return Project; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Task\", function() { return Task; });\nconst Project = function (title) {\n  this.title = title;\n  this.tasks = [];\n};\n\nconst Task = function (title, description, dueDate, priority) {\n  this.title = title;\n  this.description = description;\n  this.dueDate = dueDate;\n  this.priority = priority;\n  this.status = \"incomplete\";\n};\n\n\n\n\n//# sourceURL=webpack:///./src/construct.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./construct */ \"./src/construct.js\");\n\n\nlet projects = [];\n\nprojects.push(new _construct__WEBPACK_IMPORTED_MODULE_0__[\"Project\"](\"Default\"));\n\n//refreshes DOM\nfunction render() {  \n  //clears DOM\n  const content = document.querySelector('.content');\n  const nav = document.querySelector(\"nav\");\n  const projectsLength = content.children.length;\n  const navLength = nav.children.length;\n  for (let i = projectsLength - 1; i >= 0; i--) {\n      content.removeChild(content.children[i]);\n  }\n\n  for (let j = navLength - 1; j > 2; j--) {\n    nav.removeChild(nav.children[j]);\n  }\n    \n\n  //create new element for each project element\n  projects.forEach((el, index) => {\n    const projPanel = document.createElement(\"div\");\n    projPanel.classList.add(\"proj_panel\");\n    projPanel.innerHTML = el.title;\n    projPanel.setAttribute(\"ind\", index);\n    document.getElementById(\"nav\").appendChild(projPanel);\n    projPanel.addEventListener(\"click\", (event) => {\n        render()\n        showProject(el);\n    })\n  })\n}\n\n//universal functions\nfunction taskForm(el) {\n  const newtask = document.getElementById(\"new_task\");\n  newtask.style.display = \"flex\";\n  const content = document.getElementById('new_task');\n  const projectsLength = content.children.length;\n  for (let i = projectsLength - 1; i > 0; i--) {\n      content.removeChild(content.children[i]);\n  }\n    //creates form\n      //creates task div and title\n      const modal = document.createElement(\"div\");\n      modal.classList.add(\"mod\");\n      const taskInput = document.createElement(\"form\");\n      const newTitle = document.createElement(\"input\");\n      newTitle.required = true;\n      newTitle.id = \"title\";\n      newTitle.placeholder = \"Untitled Task\";\n      const titleLabel = document.createElement(\"label\");\n      titleLabel.setAttribute(\"for\", \"title\");\n      titleLabel.innerHTML = \"Title\";\n      newTitle.type = \"text\";\n      \n        //adds  description attribute\n      const newDesc = document.createElement(\"input\");\n      newDesc.id = \"desc\";\n      newDesc.required = true;\n      newDesc.placeholder = \"Enter Description\";\n      const descLabel = document.createElement(\"label\");\n      descLabel.setAttribute(\"for\", \"desc\");\n      descLabel.innerHTML = \"Description\";\n      newDesc.type = \"text\";\n      \n        //adds  dueDate attribute\n      const newDate = document.createElement(\"input\");\n      newDate.type = \"date\";\n      newDate.id = \"date\";\n      newDate.required = true;\n      const dateLabel = document.createElement(\"label\");\n      dateLabel.setAttribute(\"for\", \"date\");\n      dateLabel.innerHTML = \"Date\";\n      \n        //adds priority attribute\n      const newPrio = document.createElement(\"select\");\n      newPrio.id = \"prio\";\n      newPrio.required = true;\n      newPrio.selectedIndex = \"0\";\n      const prioLabel = document.createElement(\"label\");\n      prioLabel.setAttribute(\"for\", \"prio\");\n      prioLabel.innerHTML = \"Priority\";\n      newPrio.name = \"prio\";\n      const opt1 = document.createElement(\"option\");\n      const opt2 = document.createElement(\"option\");\n      const opt3 = document.createElement(\"option\");\n      opt1.value = \"Low\";\n      opt1.text = \"Low\";\n      opt2.value = \"Medium\";\n      opt2.text = \"Medium\";\n      opt3.value = \"High\";\n      opt3.text = \"High\";\n      \n      //adds add task button\n      const addTask = document.createElement(\"button\");\n          addTask.type = \"button\";\n          addTask.classList.add(\"task_add\");\n          addTask.innerHTML = \"Add Task\";\n          addTask.addEventListener(\"click\", (event) => {\n            let a = document.getElementById(\"title\");\n            let b = document.getElementById(\"desc\");\n            let c = document.getElementById(\"date\");\n            let d = document.getElementById(\"prio\");\n            \n      if (a.checkValidity() === false || b.checkValidity() === false || c.checkValidity() === false || d.checkValidity() === false) {\n        alert(\"Please complete all fields.\", \"Ok\");\n      } \n      \n        else {\n          el.tasks.push(new _construct__WEBPACK_IMPORTED_MODULE_0__[\"Task\"](a.value,b.value,c.value,d.value));\n          let taskdiv = document.getElementById(\"new_task\");\n          taskdiv.style.display = \"none\";\n          render();\n          showProject(el);\n        }\n      });\n\n      const disp = document.getElementById('form_top_bar');\n      const dispLength = disp.children.length;\n      if (dispLength > 0) {\n        for (let i = dispLength - 1; i > 0; i--) {\n          disp.removeChild(disp.children[i]);\n        }\n      }\n      let lab = document.createElement(\"label\");\n      lab.id = \"mod_lab\";\n      lab.innerHTML = \"New Task\";\n\n      disp.appendChild(lab);\n  \n      newtask.appendChild(modal);\n      modal.appendChild(titleLabel);\n      modal.appendChild(newTitle);\n      modal.appendChild(descLabel);\n      modal.appendChild(newDesc);\n      modal.appendChild(dateLabel);\n      modal.appendChild(newDate);\n      modal.appendChild(prioLabel);\n      modal.appendChild(newPrio); \n      newPrio.add(opt1);\n      newPrio.add(opt2);\n      newPrio.add(opt3);\n      modal.appendChild(addTask);\n }\n\n\n//sets event listeners globally\nfunction setListeners() {\n  let editMod = document.querySelector(\".edit_modal\");\n  let closeEditBtn = document.querySelector(\"#close_modal\");\n  let taskdiv = document.getElementById(\"new_task\");\n  let closeNewTask = document.getElementById(\"close_new_task\");\n  let newp = document.getElementById(\"new_proj\");\n\n  //event listeners for close button on edit and new task popups\n  closeNewTask.addEventListener(\"click\", (event) => {\n    taskdiv.style.display = \"none\";\n  })\n\n  closeEditBtn.addEventListener(\"click\", (event) => {\n    editMod.style.display = \"none\";\n  }); \n  \n  //set event listener for new project  \n  newp.addEventListener(\"click\", (event) => {\n    projects.push(new _construct__WEBPACK_IMPORTED_MODULE_0__[\"Project\"](\"Untitled\"))\n\n    render();\n    showProject(projects[projects.length - 1]);\n  });\n\n\n}\n\n\nfunction showProject(el) {\n\n  const content = document.querySelector(\".content\");\n  const project = document.createElement(\"div\");    \n    content.appendChild(project);\n    project.classList.add(\"project\");\n    const head = document.createElement(\"div\");\n    head.id = \"head\";\n    const title = document.createElement(\"div\");\n    title.classList.add(\"title\");\n    title.innerHTML = el.title;\n    title.addEventListener(\"click\", (event) => {\n      editTask(\"Project Title\", title.innerHTML, el);\n    });\n    project.appendChild(head);\n    head.appendChild(title);\n    const btn = document.createElement(\"button\");\n    btn.classList.add(\"remove_project\");\n    btn.type = \"button\";\n    btn.innerHTML = \"Delete\";   \n\n    //appends button to header in project\n    head.appendChild(btn);\n     //removes project on button click\n     btn.addEventListener(\"click\", (event) => {\n      let parent = btn.parentNode.parentNode;\n      let ind = parent.getAttribute(\"ind\");\n      projects.splice(ind, 1);\n      render();\n    });\n\n    const items = document.createElement(\"div\");\n    project.appendChild(items);\n    items.classList.add(\"items\");\n\n      //shows and hides form for new task input\n    const newTask = document.createElement(\"button\");\n    newTask.type = \"button\";\n    newTask.innerHTML = \"+\"\n    newTask.classList.add(\"newTaskbtn\");\n    newTask.addEventListener(\"click\", (event) => {\n        taskForm(el);    \n    });        \n    \n   //appends tasks to projects\n    for (let i = 0; i < el.tasks.length; i++) {\n        const cur = el.tasks[i];\n        //wrappers for tasks\n        const task = document.createElement(\"div\");\n        task.classList.add(\"task\");\n        task.setAttribute(\"ind\", i);\n        const box1 = document.createElement(\"div\");\n        box1.id = \"box_1\";\n        const box2 = document.createElement(\"div\");\n        box2.id = \"box_2\";\n        box2.style.display = \"none\";\n        const box3 = document.createElement(\"div\");\n        box3.id = \"box_3\";\n        box3.style.display = \"flex\";\n        box1.addEventListener(\"click\", (event) => {\n          let displayStatus = box1.parentNode.lastChild;\n          if (displayStatus.style.display === \"none\") {\n            displayStatus.style.display = \"grid\";\n          } \n            else {\n              displayStatus.style.display = \"none\";\n            }\n          });\n\n        //append title\n        const title = document.createElement(\"p\");\n        title.innerHTML = cur.title;\n        title.id = \"task_title\";\n        title.classList.add(\"attribute\");\n        title.addEventListener(\"click\", (event) => {\n          editTask(\"Task Title\", title.innerHTML, cur);\n        });       \n\n        //append description\n        const description = document.createElement(\"p\");\n        description.innerHTML = cur.description;\n        description.classList.add(\"attribute\");\n        description.addEventListener(\"click\", (event) => {\n          editTask(\"Description\", description.innerHTML, cur);\n        });\n\n        //append dueDate\n        const dueDate = document.createElement(\"p\");\n        dueDate.innerHTML = cur.dueDate;\n        dueDate.id = \"due_date\";\n        dueDate.classList.add(\"attribute\");\n        dueDate.addEventListener(\"click\", (event) => {\n          editTask(\"Due Date\", dueDate.innerHTML, cur);\n        });\n\n        //append priority\n        const priority = document.createElement(\"p\");\n        priority.innerHTML = \"Priority:<br>\" + cur.priority;\n        priority.id = \"priority\";\n        priority.classList.add(\"attribute\");\n        priority.addEventListener(\"click\", (event) => {\n          editTask(\"Priority\", priority.innerHTML, cur);\n        });\n\n        //remove task button\n        const delTask = document.createElement(\"button\");\n        delTask.type = \"button\";\n        delTask.classList.add(\"task_remove\");\n        delTask.innerHTML = \"Remove\";\n        delTask.addEventListener(\"click\", (event) => {\n          let parent = delTask.parentNode;\n          let ind = parent.getAttribute(\"ind\");\n          el.tasks.splice(ind, 1);\n          render();\n        });         \n        items.appendChild(task);\n        task.appendChild(box1);\n        task.appendChild(box2);\n        task.appendChild(box3);\n        box1.appendChild(title);\n        box1.appendChild(dueDate);\n        box2.appendChild(description);\n        box2.appendChild(box3);                \n        box3.appendChild(priority);\n        box2.appendChild(delTask);        \n    }; \n    items.appendChild(newTask);    \n  }\n\n  \n\n\n\n\n//\nfunction allProj() {\n\n  //set event listener for all projects button\n  let proj = document.getElementById(\"all_proj\");\n    proj.addEventListener(\"click\", (event) => {\n    render()\n    \n    projects.forEach((el) => {\n    showProject(el);\n    })\n  });\n}\n\n\n\n//edit task\nfunction editTask(att, val, el) {\n  \n  //clears previous input from display  \n  const content = document.querySelector('.edit_modal');\n  const projectsLength = content.children.length;\n  if (projectsLength > 0) {\n    for (let i = projectsLength - 1; i > 0; i--) {\n      content.removeChild(content.children[i]);\n    }\n  }\n  const disp = document.querySelector('.modal_display');\n  const dispLength = disp.children.length;\n  if (dispLength > 0) {\n    for (let i = dispLength - 1; i > 0; i--) {\n      disp.removeChild(disp.children[i]);\n    }\n  }\n  //populate edit display for selected task attribute\n  let editMod = document.querySelector(\".edit_modal\");\n  editMod.style.display = \"flex\";\n\n  //submit button\n  let butt = document.createElement(\"button\");\n  butt.type = \"button\";  \n  butt.id = \"edit_submit\";\n  butt.innerHTML = \"Submit\"; \n\n  let lab = document.createElement(\"label\");\n  lab.id = \"mod_lab\";\n  lab.innerHTML = att;\n\n  disp.appendChild(lab);\n  if (att === \"Priority\") {    \n    let drop = document.createElement(\"select\");\n    drop.id = \"edit_drop\";\n    const opt1 = document.createElement(\"option\");\n    const opt2 = document.createElement(\"option\");\n    const opt3 = document.createElement(\"option\");\n    opt1.value = \"Low\";\n    opt1.text = \"Low\";\n    opt2.value = \"Medium\";\n    opt2.text = \"Medium\";\n    opt3.value = \"High\";\n    opt3.text = \"High\";\n    editMod.appendChild(drop);\n    drop.add(opt1);\n    drop.add(opt2);\n    drop.add(opt3);\n\n  }\n    else if (att === \"Due Date\") {\n      let date = document.createElement(\"input\");\n      date.type = \"date\";\n      date.id = \"edit_date\";\n      editMod.appendChild(date);      \n    }\n    else {\n      let inp = document.createElement(\"input\");\n      inp.id = \"editInput\";\n      inp.value = val;  \n      inp.addEventListener('keydown', event => {\n        let editMod = document.querySelector(\".edit_modal\");\n          if (editMod.style.display === \"flex\") {\n            if (event.isComposing || event.keyCode === 13) {\n              sub(att, el);\n            }\n          }    \n        });    \n    lab.setAttribute(\"for\", \"editInput\");\n    editMod.appendChild(inp);\n    inp.focus()\n    }  \n  editMod.appendChild(butt);\n  \n  //event listeners for submitting edited attribute\n  butt.addEventListener(\"click\", (event) => {\n   sub(att, el);\n  });\n  //submits new changes from edit popup\n  function sub(att, el) {\n    if (att === \"Priority\") {\n      \n      let dropVal = document.querySelector(\"#edit_drop\");\n      el.priority = dropVal.value;      \n    } \n      else if (att === \"Due Date\") {\n        let d = document.querySelector(\"#edit_date\");\n        el.dueDate = d.value;\n      }    \n        else {\n          let edit = document.querySelector(\"#editInput\").value;\n          switch (att) {\n            case 'Task Title':\n              el.title = edit;\n              break;\n            case 'Description':\n              el.description = edit;\n              break;\n            case 'Project Title':\n              el.title = edit;\n              break;\n      }    \n    }\n    editMod.style.display = \"none\";\n    render();\n  }  \n}\n\n\n//call render on page load\nwindow.addEventListener('load', (event) => {\n  setListeners();\n  allProj();\n  render();\n  showProject(projects[0]);\n});\n\n\n//************ TEST TEST TEST TEST TEST TEST TEST ***********\nwindow.addEventListener('keydown', event => {\n  if (event.isComposing || event.keyCode === 107) {\n    projects.push(new _construct__WEBPACK_IMPORTED_MODULE_0__[\"Project\"](\"Untitled\"))\n    const cur = projects.length - 1;\n    projects[cur].tasks.push(new _construct__WEBPACK_IMPORTED_MODULE_0__[\"Task\"](\"task 1\", \"description\", \"sometime\", \"high\"));\n    render();\n  }\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });