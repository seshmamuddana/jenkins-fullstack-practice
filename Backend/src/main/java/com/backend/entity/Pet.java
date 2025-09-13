package com.backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name="pets")
public class Pet {
	@Id
	@Column(name = "id")
    int pid;
	
	@Column(name = "name", nullable = false, length = 50)
	private String name;
  
	@Column(name = "type", nullable = false, length = 50)
	private String type;
 
	@Column(name = "age", nullable = false, length = 50)
	private String age;
  
	@Column(name = "breed", nullable = false, length = 50)
	private String breed;

  // Getters and setters

	 public int getPid() {
	      return pid;
	  }

	  public void setPid(int id) {
	      this.pid = id;
	  }
	  
	  public String getName() {
      return name;
      }
 
	  public void setName(String name) {
      this.name = name;
      }

	  public String getType() {
      return type;
      }

	  public void setType(String type) {
      this.type = type;
      }

	  public String getAge() {
      return age;
      }

  public void setAge(String age) {
      this.age = age;
  }

  public String getBreed() {
      return breed;
  }

  public void setBreed(String breed) {
      this.breed = breed;
  }

 
  @Override
  public String toString() {
    return "Pet [ID=" + pid + "Name=" + name + ", Type=" + type + ", Age=" + age + ", Breed=" + breed + "]";
  }

}

