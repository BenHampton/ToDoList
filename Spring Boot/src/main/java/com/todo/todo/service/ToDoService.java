package com.todo.todo.service;

import org.springframework.stereotype.Service;

@Service
public class ToDoService {

    public String retreiveTasks(String task){
        return "got it: " + task;
    }

}
