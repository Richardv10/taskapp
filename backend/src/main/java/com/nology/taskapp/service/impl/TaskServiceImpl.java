package com.nology.taskapp.service.impl;

import com.nology.taskapp.domain.CreateTaskRequest;
import com.nology.taskapp.domain.UpdateTaskRequest;
import com.nology.taskapp.domain.entity.Task;
import com.nology.taskapp.domain.entity.TaskStatus;
import com.nology.taskapp.exception.TaskNotFoundException;
import com.nology.taskapp.repository.TaskRepository;
import com.nology.taskapp.service.TaskService;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;
import java.util.UUID;

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

    @Override
    public List<Task> listTasks() {
        return taskRepository.findAll(Sort.by(Sort.Direction.ASC));
    }

    @Override
    public Task updateTask(UUID taskId, UpdateTaskRequest request) {
       Task task = taskRepository.findById(taskId).orElseThrow(() -> new TaskNotFoundException(taskId));

        task.setTitle(request.title());
        task.setDescription(request.description());
        task.setStatus(request.status());
        task.setPriority(request.priority());
        task.setUpdated(Instant.now());

        return taskRepository.save(task);
    }

    @Override
    public void deleteTask(UUID taskId) {
        taskRepository.deleteById(taskId);
    }


}
