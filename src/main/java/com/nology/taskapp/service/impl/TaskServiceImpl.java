package com.nology.taskapp.service.impl;

import com.nology.taskapp.domain.CreateTaskRequest;
import com.nology.taskapp.domain.entity.Task;
import com.nology.taskapp.domain.entity.TaskStatus;
import com.nology.taskapp.repository.TaskRepository;
import com.nology.taskapp.service.TaskService;
import org.springframework.stereotype.Service;

import java.time.Instant;

@Service
public class TaskServiceImpl implements TaskService {

    private final TaskRepository taskRepository;

    public TaskServiceImpl(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }


    @Override
    public Task createTask(CreateTaskRequest request) {
        Instant now = Instant.now();

        Task task = new Task(
                null,
                request.title(),
                request.description(),
                request.dueDate(),
                TaskStatus.OPEN,
                request.priority(),
                now,
                now
        );
            return taskRepository.save(task);

    }
}
