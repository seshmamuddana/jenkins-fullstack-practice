package com.backend.service;

import java.util.*;

import com.backend.repository.PetRepository;
import com.backend.entity.Pet;

import org.springframework.beans.factory.annotation.Autowired;
@org.springframework.stereotype.Service

public class PetService {

    @Autowired
    PetRepository repo;
    
    public String insertPet(Pet pet) {
		repo.save(pet);
		return "Pet Inserted";
	}

	public List<Pet> retrievePet() {
		return repo.findAll();
	}

	public String updatePet(Pet pet) {
		Pet p = repo.findById(pet.getPid()).get();
		if(p != null) {
			repo.delete(p);
		}
		repo.save(pet);
		return "Pet Updated";
	}

	public String deletePet(int pid) {
		repo.deleteById(pid);
		return "Pet Deleted";
	}


}
