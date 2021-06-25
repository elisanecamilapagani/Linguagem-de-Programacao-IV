package com.example.demo;

import java.util.List;


import org.springframework.stereotype.Service;

@Service
public interface TodoService {
	
	List <Todo> findAll();
	void saveOrUpdate(Todo todo);
	void deleteTodo (String _id);
	}
