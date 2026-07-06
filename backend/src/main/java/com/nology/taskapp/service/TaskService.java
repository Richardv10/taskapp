package com.nology.taskapp.service;

import com.nology.taskapp.domain.CreateTaskRequest;
import com.nology.taskapp.domain.UpdateTaskRequest;
import com.nology.taskapp.domain.entity.Task;

import java.util.List;
import java.util.UUID;

public interface TaskService {

    Task createTask(CreateTaskRequest request);

    List<Task> listTasks();

    Task updateTask(UUID taskId, UpdateTaskRequest request);

    void deleteTask(UUID taskId);

}
