package com.nology.taskapp.service;

import com.nology.taskapp.domain.CreateTaskRequest;
import com.nology.taskapp.domain.entity.Task;

public interface TaskService {

    Task createTask(CreateTaskRequest request);
}
