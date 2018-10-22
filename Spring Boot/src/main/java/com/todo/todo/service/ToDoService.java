package com.todo.todo.service;

import com.todo.todo.model.ToDo;
import lombok.Data;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class ToDoService {

    public List<ToDo> allTasks = new ArrayList<>();

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

        Date date = new Date();

        ToDo t1 = new ToDo();
        t1.setId(1);
        t1.setTask("Task1");
        t1.setUser("Ariel");
        t1.setDate(date.toString());

        ToDo t2 = new ToDo();
        t2.setId(2);
        t2.setTask("Task2");
        t2.setUser("Ben");
        t2.setDate(date.toString());

        allTasks.add(t1);
        allTasks.add(t2);

        return allTasks.toArray();
    }

}
