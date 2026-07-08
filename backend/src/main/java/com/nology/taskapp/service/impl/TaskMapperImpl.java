package com.nology.taskapp.service.impl;

import com.nology.taskapp.domain.CreateTaskRequest;
import com.nology.taskapp.domain.UpdateTaskRequest;
import com.nology.taskapp.domain.dto.CreateTaskRequestDto;
import com.nology.taskapp.domain.dto.TaskDto;
import com.nology.taskapp.domain.dto.UpdateTaskRequestDto;
import com.nology.taskapp.domain.entity.Task;
import com.nology.taskapp.mapper.TaskMapper;
import org.springframework.stereotype.Component;

@Component
public class TaskMapperImpl implements TaskMapper {

    @Override
    public CreateTaskRequest fromDto(CreateTaskRequestDto dto) {
        return new CreateTaskRequest(
                dto.title(),
                dto.description(),
                dto.dueDate(),
                dto.priority()
        );


    }

    @Override
    public UpdateTaskRequest fromDto(UpdateTaskRequestDto dto) {
        return new UpdateTaskRequest(
                dto.title(),
                dto.description(),
                dto.dueDate(),
                dto.priority(),
                dto.status()

        );
    }

    @Override
    public TaskDto toDto(Task task) {
        return new TaskDto(
                task.getId(),
                task.getTitle(),
                task.getDescription(),
                task.getDueDate(),
                task.getPriority(),
                task.getStatus()
        );
    }
}
