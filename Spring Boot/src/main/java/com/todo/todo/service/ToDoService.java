package com.todo.todo.service;

import com.todo.todo.model.ToDo;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ToDoService {

    public static List<ToDo> allTasks = new ArrayList<>();

    public ToDo saveTask(ToDo t){

        int index = allTasks.size();

        if(!allTasks.contains(t)){
            t.setId(index + 1);
            allTasks.add(t);
            return t;
        }
        return t;
    }

    public Object[] getAllTasks(){
        return allTasks.toArray();
    }

}
