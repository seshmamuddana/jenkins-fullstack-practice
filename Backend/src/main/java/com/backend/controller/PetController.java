package com.backend.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.backend.entity.Pet;
import com.backend.service.PetService;

@RestController
@RequestMapping("/petapi/")
@CrossOrigin(origins = "*")
public class PetController {
	@Autowired
	PetService obj;
	
	@GetMapping("/")
	public String hehe() {
		return "PetAPI it is";
	}
	
	@PostMapping("/insert")
	public String func(@RequestBody Pet pet) {
		System.out.println("Insert function called");
		return obj.insertPet(pet);
	}
	
	@GetMapping("/pet")
	public List<Pet> func1(){
		return obj.retrievePet();
	}
	
	@PutMapping("/update")
	public String func2(@RequestBody Pet pet) {
		System.out.println("Update function called");
		return obj.updatePet(pet);
	}
	
	@DeleteMapping("/delete")
	public String fun3(@RequestParam("pid") int pid) {
	return obj.deletePet(pid);
	}

}

