package com.nology.taskapp.domain.dto;

import com.nology.taskapp.domain.entity.TaskPriority;
import com.nology.taskapp.domain.entity.TaskStatus;

import java.time.LocalDate;
import java.util.UUID;

public record TaskDto(
     UUID id,
     String title,
     String description,
     LocalDate dueDate,
     TaskPriority priority,
     TaskStatus status
) {
}
