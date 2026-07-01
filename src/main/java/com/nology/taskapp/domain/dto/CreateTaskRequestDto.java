package com.nology.taskapp.domain.dto;

import com.nology.taskapp.domain.entity.TaskPriority;
import jakarta.annotation.Nullable;
import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.FutureOrPresent;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import org.hibernate.validator.constraints.Length;

import java.time.LocalDate;

public record CreateTaskRequestDto(


        @NotBlank(message = ERROR_MESSAGE)
        @Length(max = 255, message = ERROR_MESSAGE)
        String title,

        @Length(max = 1000, message = ERROR_MESSAGE)
        String description,

        @FutureOrPresent
        @Nullable
        LocalDate dueDate,
        @NotNull(message = ERROR_MESSAGE_ELSE)
        TaskPriority priority
) {

    private static final String ERROR_MESSAGE = "Title must be between 1-255 char";
    private static final String ERROR_MESSAGE_ELSE = "Try again dum dum";
}
