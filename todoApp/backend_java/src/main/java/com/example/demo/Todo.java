package com.example.demo;

import java.util.Date;


import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection= "todos")
public class Todo {
	
	
	
	private String _id;
	
	private String description;
	
	private Date createdAt = new Date();
	
	private boolean done = false;

	public Date getCreatedAt() {
		return createdAt;
	}
	
	public void setid(String _id) {
		this._id = _id;
	}
	
	public String getid() {
		return _id;
	}
	

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	public boolean isDone() {
		return done;
	}

	public void setDone(boolean done) {
		this.done = done;
	}

	public String getDescription() {
		return description;
	}
}
