package com.todo.todo.controller;

import com.todo.todo.model.ToDo;
import com.todo.todo.service.ToDoService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
public class ToDoController {

    private ToDoService toDoService;

    @Autowired
    public ToDoController(ToDoService toDoService) {
        this.toDoService = toDoService;

    }

    @PostMapping("/tasks")
    public ToDo saveTasks(@RequestBody ToDo t) {
        return toDoService.saveTask(t);
    }

    @RequestMapping("/tasks")
    public Object[] getAllTasks() {
        return toDoService.getAllTasks();
    }

}
