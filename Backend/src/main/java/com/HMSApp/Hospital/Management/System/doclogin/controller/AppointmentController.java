package com.HMSApp.Hospital.Management.System.doclogin.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.management.AttributeNotFoundException;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.service.annotation.DeleteExchange;

import com.HMSApp.Hospital.Management.System.doclogin.entity.Appointment;
import com.HMSApp.Hospital.Management.System.docloginrepository.AppointmentRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v2")
public class AppointmentController {

	private AppointmentRepository appointmentRepository;

	public AppointmentController(AppointmentRepository appointmentRepository) {
		super();
		this.appointmentRepository = appointmentRepository;
	}
	
	
	@PostMapping("/insert")
	public Appointment createAppointment(@RequestBody Appointment appointment) {
		
		return appointmentRepository.save(appointment);
	}
	
	@GetMapping
	public List<Appointment>getAllAppointments(){
		return appointmentRepository.findAll();
	}
	
	@DeleteMapping("/appointments/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteAppointment(@PathVariable long id) throws AttributeNotFoundException {
	    Appointment appointment = appointmentRepository.findById(id)
	            .orElseThrow(() -> new AttributeNotFoundException("Attribute not found with id " + id));
	    appointmentRepository.delete(appointment);
	    Map<String, Boolean> response = new HashMap<>();
	    response.put("deleted", Boolean.TRUE);

	    return ResponseEntity.ok(response);
	}

	
	
}
