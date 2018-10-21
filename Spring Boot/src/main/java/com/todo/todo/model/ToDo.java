package com.todo.todo.model;

import lombok.Data;

import java.util.Date;

@Data
public class ToDo {

    private String task;

    private String user;

    private int id;

    private Date date;
}
