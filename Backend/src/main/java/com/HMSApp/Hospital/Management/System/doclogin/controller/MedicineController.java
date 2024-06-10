package com.HMSApp.Hospital.Management.System.doclogin.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.management.AttributeNotFoundException;import org.springframework.boot.autoconfigure.graphql.ConditionalOnGraphQlSchema;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.HMSApp.Hospital.Management.System.doclogin.entity.Medicine;
import com.HMSApp.Hospital.Management.System.docloginrepository.MedicineRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v3")
public class MedicineController {
	
	MedicineRepository medicineRepository;

	public MedicineController(MedicineRepository medicineRepository) {
		super();
		this.medicineRepository = medicineRepository;
	}
	
	@PostMapping("/medicines")
	public Medicine createMedicine(@RequestBody Medicine medicine) {
		return medicineRepository.save(medicine);
	}
	
	@GetMapping("/medicines")
	public List<Medicine>getAllMedicines(){
		return medicineRepository.findAll();
	}
	
	
	@GetMapping("/medicines/{id}")
	public ResponseEntity<Medicine>getMedicinebyId(@PathVariable long id) throws AttributeNotFoundException{
		
	Medicine medicine	= medicineRepository.findById(id).orElseThrow(()-> new AttributeNotFoundException("Medicine not found with id :"+id));
	return ResponseEntity.ok(medicine);
	}
	
	@PutMapping("/medicines/{id}")
	public ResponseEntity<Medicine> updateMedicine(@PathVariable long id, @RequestBody Medicine medicineDetails) throws AttributeNotFoundException {
	    Medicine medicine = medicineRepository.findById(id).orElseThrow(() -> new AttributeNotFoundException("Medicine not found with id: " + id));
	    medicine.setDrugName(medicineDetails.getDrugName()); // Update drug name with the value from medicineDetails
	    medicine.setStock(medicineDetails.getStock()); // Update stock with the value from medicineDetails
	    Medicine updatedMedicine = medicineRepository.save(medicine); // Save the updated medicine to the database
	    return ResponseEntity.ok(updatedMedicine); // Return the updated medicine in the response
	}
	
	
	@DeleteMapping("/medicines/{id}")
	public ResponseEntity<Map<String, Boolean>>delete(@PathVariable long id ) throws AttributeNotFoundException{
		Medicine medicine	= medicineRepository.findById(id).orElseThrow(()-> new AttributeNotFoundException("Medicine not found with id :"+id));
		
		medicineRepository.delete(medicine);
		
		Map<String, Boolean> response=new HashMap<String, Boolean>();
		response.put("Delete", Boolean.TRUE);
		return ResponseEntity.ok(response);
		
	}


}
