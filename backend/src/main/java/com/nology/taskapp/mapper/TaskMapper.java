package com.nology.taskapp.mapper;

import com.nology.taskapp.domain.CreateTaskRequest;
import com.nology.taskapp.domain.UpdateTaskRequest;
import com.nology.taskapp.domain.dto.CreateTaskRequestDto;
import com.nology.taskapp.domain.dto.TaskDto;
import com.nology.taskapp.domain.dto.UpdateTaskRequestDto;
import com.nology.taskapp.domain.entity.Task;

public interface TaskMapper {

    CreateTaskRequest fromDto(CreateTaskRequestDto dto);

    UpdateTaskRequest fromDto(UpdateTaskRequestDto dto);

    TaskDto toDto(Task task);
}
