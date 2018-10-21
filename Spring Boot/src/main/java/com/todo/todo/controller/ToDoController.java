package com.todo.todo.controller;

import com.todo.todo.service.ToDoService;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
public class ToDoController {

    private Logger log = LoggerFactory.getLogger(ToDoController.class);

    private ToDoService toDoService;

    @Autowired
    public ToDoController(ToDoService toDoService) {
        this.toDoService = toDoService;

    }

    @RequestMapping("/to-do")
    public String retrieveTasks(){
        //log.info(task);
        return "hello World";
                //toDoService.retreiveTasks(task);
    }

}
