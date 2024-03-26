package com.java.icharge.dto.response;

import java.util.Collections;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BasicResponse<T> {
    private String message;
    @Builder.Default
    private List<T> dataList = Collections.emptyList();
    private T data;
}
