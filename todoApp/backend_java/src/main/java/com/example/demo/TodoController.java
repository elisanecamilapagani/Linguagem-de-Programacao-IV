package com.example.demo;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/javatodos")
public class TodoController {
	
	
	@Autowired
	private  TodoService  todoService;

	@CrossOrigin
	@GetMapping(value = "/")
	public List <Todo> getAlltodos() {
		return todoService.findAll();
	}
	
	@CrossOrigin 
	@PostMapping(value = "/")
	public ResponseEntity<?> saveOrUpdate (@RequestBody Todo todo){
		todoService.saveOrUpdate(todo);
		return new ResponseEntity<> ("Salvo com sucesso ", HttpStatus.OK);
		
	}
	
	@CrossOrigin
	@DeleteMapping(value= "/{_id}")
	public ResponseEntity <?> deleteTodo (@PathVariable ("_id")  String _id){
		todoService.deleteTodo(_id);
		return new ResponseEntity <>("Excluido com sucesso", HttpStatus.OK);
	}
		
}
	
	