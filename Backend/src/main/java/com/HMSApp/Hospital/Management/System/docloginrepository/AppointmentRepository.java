package com.HMSApp.Hospital.Management.System.docloginrepository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.HMSApp.Hospital.Management.System.doclogin.entity.Appointment;
import com.HMSApp.Hospital.Management.System.doclogin.entity.Medicine;


@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long>{

}
