"use client"
import { Card } from "@/components/ui/card"
import SimpleMultipleStepForm from "./simpleMultipleStepForm"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function RegistrationForm () {

	useEffect(()=>{
		Aos.init({ duration: 2000 });
	})

	return <Card className="gap-5 p-6"  data-aos="fade-up">
		<h1 className="text-gray-900 text-2xl font-semibold">Student Enrollment Form </h1>
		<SimpleMultipleStepForm />
	</Card>
}

export default RegistrationForm